import { Controller, Get } from "@nestjs/common";
import { UsersServices } from "./users.services";

@Controller('users')
export class UsersController {
    constructor(private readonly usersServices: UsersServices) {} //Constructor inyectado

    @Get()
    getUsers() {
        return this.usersServices.getUsers(); //Retorna la ejecucion del servicio
    }
}