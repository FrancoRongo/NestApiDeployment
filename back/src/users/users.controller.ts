import { Controller, Get, HttpCode, Param, Post, Body, Put, Delete, Query, UseGuards } from "@nestjs/common";
import { UsersServices } from "./users.services";
import { UsersRepository } from "./users.repository";
import { AuthGuard } from "src/auth/guard/AuthGuard";


@Controller('users')
export class UsersController {
    constructor(private readonly usersServices: UsersServices) {} //Constructor inyectado

    @HttpCode(200)
    @Get()
    //@UseGuards(AuthGuard)
    getUsers(@Query('limit') limit:String, @Query('page') page:String)  {
      return this.usersServices.getUsers(Number(limit),Number(page));
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
    //@UseGuards(AuthGuard)
    @Put()
        updateUser(@Body()id:Number,User:UsersRepository){
        return this.usersServices.updateUsers(id,User)

    }
    
    @HttpCode(200)
    @UseGuards(AuthGuard)
    @Delete(':id')
    deleteUser(@Param('id') id: string) {
        return this.usersServices.deleteUser(Number(id));
    }
}

