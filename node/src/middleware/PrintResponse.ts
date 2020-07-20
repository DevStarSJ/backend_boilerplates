import {Middleware, ExpressMiddlewareInterface, ExpressErrorMiddlewareInterface} from "routing-controllers";
import {Request, Response, NextFunction} from "express";

@Middleware({ type: "after" })
export default class PrintResponse implements ExpressMiddlewareInterface {

	use(req: Request, res: Response, next: NextFunction): void {
		console.log(res.getHeaders())
		console.log(res.statusCode)

		next();
	}
}
