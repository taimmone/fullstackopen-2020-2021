const logger = {
  info: (...params) => process.env.NODE_ENV !== 'test' && console.log(...params),
  error: (...params) => console.error(...params),
};

module.exports = logger;
