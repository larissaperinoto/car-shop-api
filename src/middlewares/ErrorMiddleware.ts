import { NextFunction, Request, Response } from 'express';

class ErrorHandler {
  public static handle(
    error: Error,
    _req: Request,
    res: Response,
    _next: NextFunction,
  ) {
    const { message } = error;
    if (message.includes('id')) return res.status(422).json({ message });
    return res.status(404).json({ message });
  }
}

export default ErrorHandler;