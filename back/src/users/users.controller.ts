import { Controller, Get, HttpCode, Param, Post, Body, Put, Delete } from "@nestjs/common";
import { UsersServices } from "./users.services";
import { UsersRepository } from "./users.repository";
import { userInfo } from "os";

@Controller('users')
export class UsersController {
    constructor(private readonly usersServices: UsersServices) {} //Constructor inyectado

    @HttpCode(200)
    @Get()
    getUsers() {
        return this.usersServices.getUsers(); //Retorna la ejecucion del servicio
    }

    @HttpCode(200)
    @Get(':id')
    getUserById(@Param('id') id:string){
        return this.usersServices.getUsersById(Number(id));
    }

    @HttpCode(201)
    @Post()
     createUser(@Body() User: UsersRepository) {
        return this.usersServices.createUser(User);
    }
    
    @HttpCode(200)
    @Put()
        updateUser(){

        }
    
    @HttpCode(200)
    @Delete(':id')
    deleteUser(@Param('id') id: string) {
        return this.usersServices.deleteUser(Number(id));
    }
}

