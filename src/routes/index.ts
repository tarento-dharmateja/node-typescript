import express, { Request, Response, NextFunction } from "express";

import { RouteModule } from '../helpers/types/routeTypes';

import env from '../config';
const {API_BASE_PATH } = env;

const routeModule: RouteModule = {
  routePaths: [
    {path: '/test', router: testRouter, middlewares: [] }
  ],
  init: (app: express.Application): any => {
    try {
      if(!app || !app.use) {
        //exit process
      }

      // TODO: initial middlewares

      //Custom routes
      this.routePaths.forEach(route => {
        app.use(route.path, route.router)
      });
      
    } catch (error) {
      //log error
    }
  }
}

export default routeModule;