const { expect } = require('chai');
const validate = require('../lib');

const { ValidationError } = validate;

describe('Validate unit tests suite', () => {

  describe('default function', () => {

    it('Must be "ok"', () => {
      expect(validate).to.equal(validate.ok);
    });

  });

  describe('ok', () => {

    it('Must return the value if truthy', () => {
      expect(validate.ok('truthy value', 'value is not truthy')).to.equal('truthy value');
    });

    it('Must throw a ValidationError with the specified message if value is false', () => {
      expect(() => validate.ok(false, 'value is false')).to.throw(ValidationError, 'value is false');
    });

    it('Must throw a ValidationError with the specified message if value is 0', () => {
      expect(() => validate.ok(0, 'value is zero')).to.throw(ValidationError, 'value is zero');
    });

    it('Must throw a ValidationError with the specified message if value is null', () => {
      expect(() => validate.ok(null, 'value is null')).to.throw(ValidationError, 'value is null');
    });

    it('Must throw a ValidationError with the specified message if value is undefined', () => {
      expect(() => validate.ok(undefined, 'value is undefined')).to.throw(ValidationError, 'value is undefined');
    });

    it('Must throw a ValidationError with the specified message if value is an empty string', () => {
      expect(() => validate.ok('', 'value is an empty string')).to.throw(ValidationError, 'value is an empty string');
    });

  });

  describe('notNull', () => {

    it('Must return the value if not null', () => {
      expect(validate.notNull('not null value', 'value is not null')).to.equal('not null value');
    });

    it('Must throw a ValidationError with the specified message if value is null', () => {
      expect(() => validate.notNull(null, 'value is null')).to.throw(ValidationError, 'value is null');
    });

  });

});
