"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRequest = void 0;
const jwt_1 = require("@nestjs/jwt");
const jwtService = new jwt_1.JwtService({
    secret: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmMDVjZjFiMy01NzdlLTQ0NzItODg5Yy04NjBkNWI1ZmU2ZTkiLCJpZCI6ImYwNWNmMWIzLTU3N2UtNDQ3Mi04ODljLTg2MGQ1YjVmZTZlOSIsImVtYWlsIjoiaGFuem82QGhvdG1haWwuY29tIiwiaWF0IjoxNzE1MzY4NTI1LCJleHAiOjE3MTUzNzIxMjV9.MsLuz0qeaGobkb__PigCB6Lc36DcAvYO3ngcfCtvor8',
    signOptions: { expiresIn: '1h' },
});
function userRequest(req, res, next) {
    const timestamp = new Date().toISOString();
    const authHeader = req.headers['authorization'];
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        try {
            const decodedToken = jwtService.verify(token);
            console.log(token);
            const userEmail = decodedToken.email;
            const userRole = decodedToken.roles;
            const userId = decodedToken.id;
            console.log(`[${timestamp}] Usuario de la request:
        email: ${userEmail}, 
        role: ${userRole}, 
        id: ${userId}`);
            req.user = decodedToken;
        }
        catch (error) {
            console.log(`[${timestamp}] Token inválido: ${error.message}`);
        }
    }
    else {
        console.log(`[${timestamp}] No se encontró un token en la solicitud`);
    }
    next();
}
exports.userRequest = userRequest;
//# sourceMappingURL=userRequest.middelware.js.map