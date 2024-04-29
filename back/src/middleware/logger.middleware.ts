import { Request, Response, NextFunction } from 'express';


export function LoggingGlobalMiddleware(req:Request, res:Response,  next: NextFunction){
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}]Estas ejecutando un metodo ${req.method} en la ruta ${req.url}`);
    next();
}
/*export function Saludo (req:Request, res:Response, next: NextFunction){
    const timestamp = new Date ().toISOString();
    console.log(`Que haces todo bien? aca tenes la hora ${timestamp}`);
    next()
}*/