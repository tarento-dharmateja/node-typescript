import express, { Router, Request, Response, NextFunction } from "express";

export interface RouteModule {
  routePaths: {
    path: string;
    router: (...middlewares: ((request: Request, reply: Response, next: NextFunction) => Response | void)[]) => Router;
    middlewares: ((request: Request, reply: Response, next: NextFunction) => Response | void)[];
  }[];
  init: (app: express.Application) => string;
}