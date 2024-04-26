import { Injectable, Inject, Param} from "@nestjs/common";
import { UsersRepository } from "./users.repository";

@Injectable()
export class UsersServices {
    constructor (private usersRepository:UsersRepository) {}
    
    async getUsers(limit: number = 5, page: number = 1) {
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;

        const dbUsers = await this.usersRepository.getUsers();

        return {
            data: dbUsers.slice(startIndex, endIndex),
            total: dbUsers.length,
            page,
            limit
        };
    } 
    async getUsersById(id:number) {
        const user = await this.usersRepository.getById(id);
        if(!user) {
            throw new Error(`User with id ${id} not found`)
        }
        const {password,...rest} = user;
        return rest
        
    } 
    createUser(user:UsersRepository){
        return this.usersRepository.createUser(user);
    }
    async deleteUser(id: number) {
        return this.usersRepository.deleteUser(id);
    }

    updateUsers(id:Number , user:any){
        return this.usersRepository.updateUsers(id,user);
    }
}
