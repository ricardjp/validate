const { ValidationError } = require('./ValidationError');

const ok = function ok(value, message) {
  if (!value) {
    throw new ValidationError(message);
  }
  return value;
};

const notNull = function notNull(value, message) {
  if (value === null) {
    throw new ValidationError(message);
  }
  return value;
};

module.exports = ok;
module.exports.ok = ok;
module.exports.notNull = notNull;
