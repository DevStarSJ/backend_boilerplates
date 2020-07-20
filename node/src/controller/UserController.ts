import { Router, Request, Response, NextFunction } from 'express';
import { Controller, JsonController, Req, Res, QueryParam, BodyParam, HeaderParam, Param, Body, Get, Post, Render, Redirect } from "routing-controllers";
import bcrypt from 'bcrypt';
import {getManager} from "typeorm";
import { OpenAPI } from 'routing-controllers-openapi'
import JwtService from '../service/JwtService';
import {User} from "../entity/User";
import AuthTokenService from '../service/AuthTokenService';

@OpenAPI({security: [{ basicAuth: [] }]})
@JsonController()
export default class UserController {
	@Post("/users/sign_in")
	async signIn(
		@BodyParam("username") username: string,
		@BodyParam("password") password: string,
		@Res() res: any
	) {
		const jwtBody = {
			id: 1,
			username: username
		}
		const constJwtToken = JwtService.createToken(jwtBody);
		console.log(constJwtToken);
		res.header('Content-Type', 'application/json')
			.header('token', constJwtToken)

		return { success: 'ok' };
	}

	@Get("/users/:id([0-9,]+)")
	async findOne(
		@Param('id') id: number
	) {
		const repository = getManager().getRepository(User);
		const user = await repository.findOne(id, {relations: ["items"]});

		return user;
	}

	@Get("/users/me")
	async findMe(
		@HeaderParam('Authorization') userToken: string
	) {
		const user = await AuthTokenService.getUser(userToken);
		return user;
	}

	@Post("/users/sign_up")
	async signUp(
		@BodyParam("username") username: string,
		@BodyParam("password") password: string,
		@Res() res: any
	) {
		const saltRounds = 10;
		const user = new User();
		user.username = username;
		user.password = bcrypt.hashSync(password, saltRounds);
		await getManager().save(user);

		const token = AuthTokenService.encode(user);

		console.log('user:', user);
		console.log('AuthToken:', token);
		res.header('Content-Type', 'application/json')
			.header('token', token)

		return { success: 'ok', token, user };
	}
}
