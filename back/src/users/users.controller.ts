/*import { Controller, Get, HttpCode, Param, Post, Body, Put, Delete, Query, UseGuards, HttpStatus, BadRequestException } from "@nestjs/common";
import { UsersServices } from "./users.services";
import { AuthGuard } from "src/auth/guard/AuthGuard";
import { User } from "./users.interface";
import { UserDto } from "./users.dto";


@Controller('users')
export class UsersController {
    constructor(private readonly usersServices: UsersServices) {} 

    @HttpCode(201)
    @UseGuards(AuthGuard)
    @Get()
    //@UseGuards(AuthGuard) 
    async getUsers(@Query('page') page: number, @Query('limit') limit: number): Promise<{ users: User[], totalPages: number, totalCount: number }> {
        return await this.usersServices.getUsers(page, limit);
    }
    
   /@HttpCode(200)
    @UseGuards(AuthGuard)
    @Get(':name')
    getUserByName(@Param('name') name: string){
        return this.usersServices.getUserByName(name);
    }

    @HttpCode(200)
    @UseGuards(AuthGuard)
    @Get(':country')
    getUserByCountry(@Param('country') country:string){
        return this.usersServices.getUserByCountry(country)
    }

    @HttpCode(200)
    @UseGuards(AuthGuard)
    @Get(':id')
    getUserById(@Param('id') id:number){
        return this.usersServices.getUsersById(id);
    }
     
    @HttpCode(HttpStatus.CREATED)
    @Post()
     async createUser(@Body() User: UserDto) {
        return await this.usersServices.createUser(User);
    }
    
    @HttpCode(200)
    @UseGuards(AuthGuard)
    @Put(':id')
    async updateUser(@Param('id') id: number, @Body() updateUserDto: Partial<User>): Promise<number> {
      if (!updateUserDto.name && !updateUserDto.email && !updateUserDto.password && !updateUserDto.address) {
        throw new BadRequestException("Al menos un usuario debe estar completo");
      }
      return this.usersServices.updateUsers(id, updateUserDto);
    }
 
    @HttpCode(HttpStatus.OK)
    @UseGuards(AuthGuard)
    @Delete(':id')
    async deleteUser(@Param('id') id: string): Promise<number> {
        const userId = await this.usersServices.deleteUser(parseInt(id));
        return userId;
    }
}*/

