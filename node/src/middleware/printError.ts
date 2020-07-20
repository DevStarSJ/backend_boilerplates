import {Request , Response , NextFunction}  from 'express';

export default function printError(err: any, req: Request, res: Response, next: NextFunction) {
  console.error(err);
  next(err);
}