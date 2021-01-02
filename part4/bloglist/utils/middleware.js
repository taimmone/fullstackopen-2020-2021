const logger = require('./logger');

const requestLogger = (req, res, next) => {
  logger.info('Method:', req.method);
  logger.info('Path:  ', req.path);
  logger.info('Body:  ', req.body);
  logger.info('---');
  next();
};

const unknownEndPoint = (req, res) => res.status(404).send({ error: 'unknown endpoint' });

const errorHandler = (err, req, res, next) => {
  logger.error(err.message);
  if (err.name === 'CastError') return res.status(400).send({ error: 'malformatted id' });
  if (err.name === 'Validationerror') return res.status(400).json({ error: err.message });
  next(err);
};

module.exports = { requestLogger, unknownEndPoint, errorHandler };
