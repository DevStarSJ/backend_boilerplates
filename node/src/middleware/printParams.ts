import { Request, Response, NextFunction } from 'express';

export default function printParams(req: Request, res: Response, next: NextFunction) {
	console.log('hostname:', req.hostname);
	console.log('path:', req.path);
	console.log('method:', req.method);
	console.log('headers:', req.headers);
	console.log('params:', req.params);
	console.log('query:', req.query);
	console.log('body:', req.body);

	// console.log(req);
	// console.log(res);

	next();
}
