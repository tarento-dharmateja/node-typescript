import express, { Router, Request, Response, NextFunction } from "express";

export interface RouteModule {
  routePaths: {
    path: string;
    router: (...middlewares: ((request: Request, reply: Response, next: NextFunction) => Response)[]) => Router;
    middlewares: ((request: Request, reply: Response, next: NextFunction) => Response)[];
  }[];
  init: (app: express.Application) => string;
}