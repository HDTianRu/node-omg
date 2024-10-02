import api from "./api.js"
import { ulid } from "ulid"
import WebSocket from "ws"

class omega {
  ws = Object.create(null)
  echo = {}
  cbs = {}
  timeout = 30*1000
  
  async init() {
    if (!!this.ws?.url) return
    return new Promise((resolve) => {
      this.connect("ws://127.0.0.1:3291", resolve)
    })
  }
  
  connect(url, resolve) {
    this.ws = new WebSocket(url)
    this.ws
      .on("open", () => {
        let type = "event"
        for (const [ event, _ ] of Object.entries(this.cbs)) {
          this.ws.send(JSON.stringify({ type, event }))
        }
        resolve()
        logger.info("ws已连接")
      })
      .on("error", (err) => logger.error(err.code))
      .on("close", async () => {
        logger.warn("ws已断开")
        await this.sleep(10*1000)
        this.connect(url, resolve)
      })
      .on("message", (data) => this.message(data, this.ws))
  }
  
  sleep(time, promise) {
    if (promise) return Promise.race([promise, this.sleep(time)])
    return new Promise(resolve => setTimeout(resolve, time))
  }
  
  sendApi(data, ws) {
    const { type, event, action, param, callback } = data
    if (type == "event") {
      if (this.cbs[event] === undefined) {
        this.cbs[event] = [callback]
        ws.send(JSON.stringify({ type, event }))
      } else {
        this.cbs[event].push(callback)
      }
      return
    }
    const echo = ulid()
    const request = { type, action, param, echo }
    ws.send(JSON.stringify(request))
    const error = Error()
    return new Promise((resolve, reject) =>
      this.echo[echo] = {
        request, resolve, reject, error,
        timeout: setTimeout(() => {
          reject(Object.assign(error, request, { timeout: this.timeout }))
          delete this.echo[echo]
          ws.terminate()
        }, this.timeout),
      }
    )
  }
  
  message(data, ws) {
    try {
      data = JSON.parse(data)
    } catch (err) {}
    if (data.event && this.cbs[data.event]) {
      for (const callback of this.cbs[data.event]) {
        callback(data.data)
      }
    }
    else if (data.echo && this.echo[data.echo]) {
      this.echo[data.echo].resolve(data.data ? new Proxy(data, {
        get: (target, prop) => target.data[prop] ?? target[prop],
      }) : data)
      clearTimeout(this.echo[data.echo].timeout)
      delete this.echo[data.echo]
    } else {
      logger.warn("未知消息:", data)
    }
  }
}

export default new Proxy(new omega(), {
  get: (target, prop) => {
    return target[prop] || ((...args) => {
      return target.sendApi(api[prop](...args), target.ws)
    })
  }
})