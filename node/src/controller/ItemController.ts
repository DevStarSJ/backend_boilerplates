import { Router, Request, Response, NextFunction } from 'express';
import { Controller, JsonController, Req, Res, QueryParam, BodyParam, HeaderParam, Param, Body, Get, Post, Render, Redirect } from "routing-controllers";
import bcrypt from 'bcrypt';
import {getManager} from "typeorm";
import { OpenAPI } from 'routing-controllers-openapi'
import {Item} from "../entity/Item";
import AuthTokenService from '../service/AuthTokenService';
import { User } from '../entity/User';

@OpenAPI({security: [{ basicAuth: [] }]})
@JsonController()
export default class ItemController {

	@Get("/items/:id([0-9,]+)")
	async findOne(
		@Param('id') id: number
	) {
		const repository = getManager().getRepository(Item);
		const item = await repository.findOne(id);

		return item;
	}

	@Post("/items")
	async create(
		@BodyParam("name") name: string,
		@BodyParam("price") price: number,
		@BodyParam("userId") userId: number
	) {
		console.log(name, price, userId)
		const repository = getManager().getRepository(User);
		const user = await repository.findOne(userId);
		const item = new Item(name, price, user);
		await getManager().save(item);

		console.log('item:', item);

		return { success: 'ok', item };
	}
}
