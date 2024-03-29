class ValidationError extends Error {

  constructor(message) {
    super();
    this.message = message;
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }

}

module.exports = {
  ValidationError,
};
