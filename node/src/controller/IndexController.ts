import { Router, Request, Response, NextFunction } from 'express';
import { Controller, JsonController, Req, Res, QueryParam, Param, Body, Get, Post, Render, Redirect } from "routing-controllers";

@JsonController()
export default class IndexController {

	@Get("/")
	async index() {
		return { success: true };
	}
}
