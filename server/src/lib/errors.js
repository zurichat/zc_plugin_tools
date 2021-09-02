class AppError extends Error {
  constructor(message, statusCode = 500) {
    super(message);
    this.name = "ZC-plugin-tools-API-Error";
    this.statusCode = statusCode;
    this.isOperational = true;
    this.date = new Date();

    if (Error.captureStackTrace)
      Error.captureStackTrace(this, this.constructor);
  }
}

class BadRequestError extends AppError {
  constructor(message = "Bad Request", statusCode = 400) {
    super(message, statusCode);
  }
}

class DuplicateError extends AppError {
  constructor(message = "Duplicate already exists", statusCode = 409) {
    super(message, statusCode);
  }
}

class InternalServerError extends AppError {
  constructor(message = "Something went wrong.", statusCode = 500) {
    super(message, statusCode);
  }
}

class UnAuthorizedError extends AppError {
  constructor(message = "Unauthorized Access", statusCode = 401) {
    super(message, statusCode);
  }
}

class ForbiddenError extends AppError {
  constructor(message = "Forbidden Request", statusCode = 403) {
    super(message, statusCode);
  }
}

class NotFoundError extends AppError {
  constructor(message = "Resource not found", statusCode = 404) {
    super(message, statusCode);
  }
}

const Errors = {
  BadRequestError,
  InternalServerError,
  UnAuthorizedError,
  ForbiddenError,
  NotFoundError,
  DuplicateError,
};

module.exports = Errors;
