# Validate
Assists in validating arguments

## Install

```bash
$ npm install @arcanix/validate
```



## Usage

### Validations
Here is the list of validations:

Validation | Description
--- | ---
validate(value [, message]) | alias for validate.ok()
validate.ok(value [, message]) | Checks if value if truthy, if not, throws a ValidationError with the specified message
validate.notNull(value [, message]) | Checks if the value if not null, if null, throws a ValidationError with the specified message


### Example

```javascript
const validate = require('validate');

class SomeClass {

  constructor(myFirstArgument, mySecondArgument) {
    this.myFirstArgument = validate(myFirstArgument, 'expected myFirstArgument');
    this.mySecondArgument = validate(mySecondArgument, 'expected mySecondArgument');  
  }

}
```
 