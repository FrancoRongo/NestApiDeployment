/*import { Injectable, Inject, Param} from "@nestjs/common";
import { UsersRepository } from "./users.repository";
import { User } from "./users.interface";
import { UserDto } from "./users.dto";
import { promises } from "dns";

@Injectable()
export class UsersServices {
    constructor (private usersRepository:UsersRepository) {}
    
    async getUsers(page: number = 1, limit: number = 5): Promise<{ users: User[], totalPages: number, totalCount: number }> {
        // Calcula el offset para la paginación
        const offset = (page - 1) * limit;

        // Obtiene los usuarios paginados del repositorio
        const users = await this.usersRepository.getUsersPaginated(offset, limit);

        // Obtiene el número total de usuarios desde el repositorio
        const totalCount = await this.usersRepository.getTotalCount();

        // Calcula el número total de páginas
        const totalPages = Math.ceil(totalCount / limit);

        return await { users, totalPages, totalCount };
    }
    
   
    
    getUserByCountry(country:string): Promise<User[]>{
        return this.usersRepository.getUserByCountry(country);
    }
    
   /* getUserByName(name:string){
        return this.usersRepository.getUserByName(name);
    }*/
    
    
    /* createUser(user:UserDto){
      return this.usersRepository.createUser(user);
    }
    
    deleteUser(id: number) {
        return this.usersRepository.deleteUser(id);
    }

    updateUsers(id:number , updateUserDto:Partial<User>): Promise<number>{
        return this.usersRepository.updateUser(id,updateUserDto);
    } 
    
    getUsersById(id:number) {
        return this.usersRepository.getById(id);
    } 
}*/
