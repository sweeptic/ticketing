import { ValidationError } from 'express-validator';

export class RequestValidationError extends Error {
  // errors: ValidationError[]
  constructor(public errors: ValidationError[]) {
    //  this.errors = errors;
    super();

    //  https://stackoverflow.com/questions/41102060/typescript-extending-error-class
    // This is because when you call Error as a function (rather than via new or, in ES2015, super or Reflect.construct), it ignores this and creates a new Error.
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }
}
