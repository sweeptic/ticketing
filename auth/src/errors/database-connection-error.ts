import { CustomError } from './custom-error';

export class DatabaseConnectionError extends CustomError {
  statusCode = 500;
  reason = 'Error connecting to database';
  constructor() {
    super('Error connecting to db');

    //  https://stackoverflow.com/questions/41102060/typescript-extending-error-class
    // This is because when you call Error as a function (rather than via new or, in ES2015, super or Reflect.construct), it ignores this and creates a new Error.
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeErrors() {
    return [{ message: this.reason }];
  }
}
