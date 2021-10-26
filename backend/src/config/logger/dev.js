const { format, createLogger, transports } = require("winston");
const { combine, timestamp, label, printf, colorize, errors, json } = format;

const logFormat = printf(({ level, message, label, timestamp, stack }) => {
  return `${timestamp}\n[${label}] ${level}:\n${stack || message}\n`;
});

const logger = createLogger({
  format: combine(
    label({ label: "ZC-plugin-tools-API" }),
    timestamp(),
    errors({ stack: true }),
    json()
  ),
  transports: [
    new transports.Console({
      format: combine(
        colorize(),
        timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
        logFormat
      ),
    }),
    new transports.File({ filename: "errors.log", level: "error" }),
    new transports.File({ filename: "all-logs.log" }),
  ],
  rejectionHandlers: [
    new transports.File({ filename: "unhandled-rejections.log" }),
  ],
});

module.exports = logger;
