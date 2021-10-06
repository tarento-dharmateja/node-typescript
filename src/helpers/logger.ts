import winston , {Logger, LoggerOptions, createLogger, format as LoggerFormat, transports} from 'winston';
import env from 'config';
const {LOG_LEVEL,NODE_ENV} = env;
const consoleLogTransportOptions: transports.ConsoleTransportOptions = {
  level: LOG_LEVEL,
  format: winston.format.combine(LoggerFormat.timestamp({format:'YYYY-MM-DD HH:mm:ss ZZ'}), winston.format.json()), //json()
  stderrLevels: ['errors']
};

const consoleLogTransport: transports.ConsoleTransportInstance = new transports.Console(consoleLogTransportOptions);

const options: LoggerOptions = {
  format: LoggerFormat.combine(LoggerFormat.timestamp({ format: 'YYYY-MM-DD HH:mm:ss ZZ'}),LoggerFormat.json()),
  transports: [],
}

const logger: Logger = createLogger(options);
if(NODE_ENV === 'development') {
  //logger.add(consoleLogTransport);
}

logger.add(consoleLogTransport);
export default logger;