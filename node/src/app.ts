import "reflect-metadata";
import express, { Request, Response, NextFunction } from 'express';
import asyncify from "express-asyncify";
import cors from 'cors';
import bodyParser from "body-parser";
import {useExpressServer} from "routing-controllers";
import dotenv from "dotenv";

import {printError, printParams, PrintResponse} from "./middleware"
import {apolloServer} from './graphql'
import swaggerUiExpress from 'swagger-ui-express';
import { swaggerSpec } from './swagger';

dotenv.config();

const app = asyncify(express());
export default app;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(printParams);

apolloServer.applyMiddleware({ app, path: '/graphql' });

app.use('/docs', swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerSpec));

useExpressServer(app, {
	controllers: [__dirname + "/controllers/**/*.js"],
  middlewares: [PrintResponse],
	defaultErrorHandler: false,
	classTransformer: false,
	defaults: {
		paramOptions: {
			required: false
		}
	}
});

app.use(printError);
