import { Request, Response, NextFunction } from 'express';
import { JwtService } from '@nestjs/jwt';

const jwtService = new JwtService({
  secret: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmMDVjZjFiMy01NzdlLTQ0NzItODg5Yy04NjBkNWI1ZmU2ZTkiLCJpZCI6ImYwNWNmMWIzLTU3N2UtNDQ3Mi04ODljLTg2MGQ1YjVmZTZlOSIsImVtYWlsIjoiaGFuem82QGhvdG1haWwuY29tIiwiaWF0IjoxNzE1MzY4NTI1LCJleHAiOjE3MTUzNzIxMjV9.MsLuz0qeaGobkb__PigCB6Lc36DcAvYO3ngcfCtvor8', // Cambia esto por tu clave secreta real
  signOptions: { expiresIn: '1h' },
});

export function userRequest(req: Request, res: Response, next: NextFunction) {
  const timestamp = new Date().toISOString();

  // Extrae el token del encabezado de autorización
  const authHeader = req.headers['authorization'];
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    try {
      // Decodifica el token y extrae la información del usuario
      const decodedToken = jwtService.verify(token);
      console.log(token)
      const userEmail = decodedToken.email
      const userRole = decodedToken.roles
      const userId = decodedToken.id
      console.log(
        `[${timestamp}] Usuario de la request:
        email: ${userEmail}, 
        role: ${userRole}, 
        id: ${userId}`
      );
      // Puedes agregar el usuario a la solicitud si es necesario
      (req as any).user = decodedToken;
    } catch (error) {
      console.log(`[${timestamp}] Token inválido: ${error.message}`);
    }
  } else {
    console.log(`[${timestamp}] No se encontró un token en la solicitud`);
  }

  next();
}