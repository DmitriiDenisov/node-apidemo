import { createLogger, format, transports } from 'winston';

const {
  combine, timestamp, label, prettyPrint, json, simple
} = format;

const formatConsole = (lbl) => combine(simple(), label({ label: lbl }), timestamp(), json(), prettyPrint());
const formatFile = (lbl) => combine(simple(), label({ label: lbl }), timestamp(), json(), prettyPrint());

export const logger = createLogger({
  level: 'info',
  format: simple(),
  transports: [
    new transports.Console({
      format: formatConsole('API LOG')
    }),
    new transports.File({
      filename: 'events.log',
      level: 'info',
      format: formatFile('API LOG')
    })
  ]
});

export const dbLogger = createLogger({
  level: 'error',
  format: json(),
  transports: [
    new transports.Console({
      format: formatConsole('DB CONNECTION LOG')
    }),
    new transports.File({
      filename: 'db_events.log',
      level: 'info',
      format: formatFile('DB CONNECTION LOG')
    })
  ]
});
