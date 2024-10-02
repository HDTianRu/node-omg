import log4js from 'log4js'
import chalk from 'chalk'
import fs from 'node:fs'

const log_level = "info"

export default function setLog () {
  let file = './logs'
  if (!fs.existsSync(file)) {
    fs.mkdirSync(file)
  }

  log4js.configure({
    appenders: {
      console: {
        type: 'console',
        layout: {
          type: 'pattern',
          pattern: '%[[%d{hh:mm:ss}][%4.4p]%] %m'
        }
      },
      command: {
        type: 'dateFile',
        filename: 'logs/command',
        pattern: 'yyyy-MM-dd.log',
        numBackups: 10,
        alwaysIncludePattern: true,
        layout: {
          type: 'pattern',
          pattern: '[%d{hh:mm:ss}][%4.4p] %m'
        }
      },
      error: {
        type: 'file',
        filename: 'logs/error.log',
        alwaysIncludePattern: true,
        layout: {
          type: 'pattern',
          pattern: '[%d{hh:mm:ss}][%4.4p] %m'
        }
      }
    },
    categories: {
      default: { appenders: ['console'], level: log_level },
      command: { appenders: ['console', 'command'], level: 'warn' },
      error: { appenders: ['console', 'command', 'error'], level: 'error' }
    }
  })

  const defaultLogger = log4js.getLogger('message')
  const commandLogger = log4js.getLogger('command')
  const errorLogger = log4js.getLogger('error')

  global.logger = {
    trace () {
      defaultLogger.trace.call(defaultLogger, ...arguments)
    },
    debug () {
      defaultLogger.debug.call(defaultLogger, ...arguments)
    },
    info () {
      defaultLogger.info.call(defaultLogger, ...arguments)
    },
    warn () {
      commandLogger.warn.call(defaultLogger, ...arguments)
    },
    error () {
      errorLogger.error.call(errorLogger, ...arguments)
    },
    fatal () {
      errorLogger.fatal.call(errorLogger, ...arguments)
    },
    mark () {
      errorLogger.mark.call(commandLogger, ...arguments)
    }
  }

  logColor()
}

function logColor () {
  logger.chalk = chalk
  logger.red = chalk.red
  logger.green = chalk.green
  logger.yellow = chalk.yellow
  logger.blue = chalk.blue
  logger.magenta = chalk.magenta
  logger.cyan = chalk.cyan
}
