const { ValidationError } = require('./ValidationError');
const validate = require('./validate');

module.exports = validate;
module.exports.ValidationError = ValidationError;
