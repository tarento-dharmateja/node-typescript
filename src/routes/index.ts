import express, { Request, Response, NextFunction } from "express";

import { RouteModule } from 'helpers/types/routeTypes';
import paymentRouter from "./paymentRouter";

const routeModule: RouteModule = {
  routePaths: [
    {path: '/payment', router: paymentRouter, middlewares: [] }
  ],
  init: (app: express.Application): any => {
    try {
      if(!app || !app.use) {
        //exit process
      }

      app.use((request: Request, reply: Response, next: NextFunction) => {
        // TODO: initial middlewares
        return next();
      });
      //Custom routes
      this.routePaths.forEach( route => {
        app.use(route.path, route.router)
      });
      
    } catch (error) {
      //log error
    }
  }
}

export default routeModule;