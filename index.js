import './lib/init.js'
import coromega from "./coromega.js"
logger.info("启动ing")
await coromega.init()
logger.info("已连接omg")
global.coromega = coromega

logger.info(await coromega.send_ws_cmd("list"))
coromega.when_chat_msg(logger.info)