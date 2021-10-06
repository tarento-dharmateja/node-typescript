import { Request, Response, NextFunction } from "express";

function checkpayment(request: Request, reply: Response, next: NextFunction){
  //TODO: do something
  return {status:'sucess'}
}


export const paymentCtrl = {
  checkpayment
}