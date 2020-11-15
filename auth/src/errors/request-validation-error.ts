import { ValidationError } from 'express-validator';
import { CustomError } from './custom-error';

export class RequestValidationError extends CustomError {
  statusCode = 400;
  // errors: ValidationError[]
  constructor(public errors: ValidationError[]) {
    //  this.errors = errors;
    super('Invalid request parameters');

    //  https://stackoverflow.com/questions/41102060/typescript-extending-error-class
    // This is because when you call Error as a function (rather than via new or, in ES2015, super or Reflect.construct), it ignores this and creates a new Error.
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    return this.errors.map(error => {
      return { message: error.msg, field: error.param };
    });
  }
}
