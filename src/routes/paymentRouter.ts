import { Router, Request, Response, NextFunction } from "express";

import { paymentCtrl } from "controllers";

const { checkpayment } = paymentCtrl;
function paymentRouter(...middlewares: ((request: Request, reply: Response, next: NextFunction) => Response)[]) {
  const routes = Router();

  routes.get('/check', ...middlewares, checkpayment)
}

export default paymentRouter;