import {logger} from 'react-native-logs';

const config = {
  severity: '', // minimum level to log
  stringifyMsg: false, // enable stringifying messages

  formatMsg: false, // enable formatting messages
  //   stringifyFunc: (msg: any) => msg, // custom stringify function

  transportOptions: {
    _def: 'console',
    _stringifyMsg: false,
    raw: true, // disable raw output
    _formatMsg: false, // disable formatting messages

    console: {
      colors: true, // enable colors in console
      transport: 'console', // use console transport
      format: '[{severity}] {message}', // log format
      transportOptions: {
        raw: true, // disable raw output
        colors: true, // enable colors in console
      },
    },
    colors: {
      info: 'blue',
      warn: 'yellow',
      error: 'red',
      debug: 'green',
    },
  },
};

const log = logger.createLogger(config);

export default log;
