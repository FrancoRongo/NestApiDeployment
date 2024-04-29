/*import { Injectable } from "@nestjs/common";
import { User } from "./users.interface";
import { error } from "console";
import { UserDto } from "./users.dto";
import { promises } from "dns";
import { throwError } from "rxjs";

@Injectable()
export class UsersRepository{
    private users: User[] = [

        {
            id: 1,
            email: "user1@example.com",
            name: "John Doe",
            password: "password1",
            address: "123 Main Street",
            phone: "123-456-7890",
            country: "United States",
            city: "New York"
          },
          {
            id: 2,
            email: "user2@example.com",
            name: "Alice Smith",
            password: "password2",
            address: "456 Elm Street",
            phone: "456-789-0123",
            country: "Canada",
            city: "Toronto"
          },
          {
            id: 3,
            email: "user3@example.com",
            name: "Bob Johnson",
            password: "password3",
            address: "789 Oak Street",
            phone: "789-012-3456",
            country: "United Kingdom",
            city: "London"
          },
          {
            id: 4,
            email: "user4@example.com",
            name: "Emma Brown",
            password: "password4",
            address: "987 Pine Street",
            country:"United States",
            phone: "987-654-3210"
          },
          {
            id: 5,
            email: "user5@example.com",
            name: "Michael Lee",
            password: "password5",
            address: "654 Birch Street",
            country: "United States",
            phone: "654-321-0987"
          },
          {
            id: 6,
            email: "user1@example.com",
            name: "Franco",
            password: "password1",
            address: "123 Main Street",
            phone: "123-456-7890",
            country: "Canada",
            city: "New York"
          },
          {
            id: 7,
            email: "user1@example.com",
            name: "Arturo",
            password: "password1",
            address: "123 Main Street",
            phone: "123-456-7890",
            country: "United States",
            city: "New York"
          },
          {
            id: 8,
            email: "user1@example.com",
            name: "John Doe",
            password: "password1",
            address: "123 Main Street",
            phone: "123-456-7890",
            country: "United States",
            city: "New York"
          },
          {
            id: 9,
            email: "user1@example.com",
            name: "Alicia",
            password: "password1",
            address: "123 Main Street",
            phone: "123-456-7890",
            country: "United States",
            city: "New York"
          },
          {
            id: 10,
            email: "user1@example.com",
            name: "John",
            password: "password1",
            address: "123 Main Street",
            phone: "123-456-7890",
            country: "United States",
            city: "New York"
          },

    ];
  userRepository: any;


    
    //Retorna todos los usuarios (Pero sin el dato de la contraseña)  
    async getUsers(): Promise<User[]> {
      return this.users.map(user => ({ ...user, password: undefined })); 
    }

    async getUsersPaginated(offset: number, limit: number): Promise<User[]> {
    // Lógica para obtener usuarios paginados desde la fuente de datos
    const g_users: User[] = await this.getUsers();
    const paginatedUsers = g_users.slice(offset, offset + limit);
    return paginatedUsers;
    }
    async getTotalCount(): Promise<number> {
    // Retorna el número total de usuarios en la fuente de datos
     return this.users.length;
    }
  
    async getUserByCountry(country: string): Promise<User[]> {
      const userCountry = this.users.filter((user) => user.country === country);
      if (userCountry.length === 0) {
          throw new Error(`There aren't users from this country: ${country}`);
      }
      return userCountry.map((user) => ({ ...user, password: undefined }));
  }
  
    //Retorna el usuario mediante el nombre:
     async getUserByName (name:string): Promise<User>{
      const userName = this.users.find((user)=> user.name === name)
      if (!userName){
        throw new Error (`User with this name: ${name}, doesen't exist`)
      }
      return {... userName, password:undefined}
    }
  
    //Retorna un usuario mediante el id:
    async getById(id: number): Promise<User>{
      const user = this.users.find((user)=> user.id === id)
      if(!user){
        throw new Error ('User Not Found') 
      }
      return {... user, password:undefined}

    } 

    async createUser(newUser: UserDto): Promise<User> {
      const id = this.users.reduce((maxId, user) => (user.id > maxId ? user.id : maxId), 0) + 1;
      const userWithId = { id, ...newUser };
      this.users.push(userWithId);
      return userWithId;
    }

    async deleteUser(id: number): Promise<number> {
    const index = this.users.findIndex((user) => user.id === parseInt(id.toString()));
    if (index === -1) {
        throw new Error(`User with id ${id} not found`);
    }

    this.users.splice(index, 1);
    return id;
    }

    async updateUser(id:number, updateUserDto: Partial<User>): Promise<number> {
      const index = this.users.findIndex((user) => user.id === parseInt(id.toString()));
      if (index === -1) {
          throw new Error(`User with id ${id} not found`);
      }
      this.users[index] = { ...this.users[index], ...updateUserDto };
      return id; // Devolver el id de la entidad editada
  }
}*/
