import { Injectable, Inject} from "@nestjs/common";
import { UsersRepository } from "./users.repository";

@Injectable()
export class UsersServices {
    
   
   
    constructor (private usersRepository:UsersRepository) {}
    async getUsers(){
        const dbUsers = await this.usersRepository.getUsers();
        return dbUsers.map(user=>{
            const { password,...rest } = user;
            return rest
        });
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
}
