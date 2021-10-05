import express, { Router, Request, Response, NextFunction } from "express";

export interface RouteModule {
  routePaths: {
    path: string;
    router: (...middleware: ((request: Request, reply: Response, next: NextFunction) => void | Response)[]) => Router;
    middlewares: ((request: Request, reply: Response, next: NextFunction) => void | Response) [];
  }[];
  init: (app: express.Application) => string;
}