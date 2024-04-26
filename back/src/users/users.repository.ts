import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersRepository{
    private users = [

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
            phone: "987-654-3210"
          },
          {
            id: 5,
            email: "user5@example.com",
            name: "Michael Lee",
            password: "password5",
            address: "654 Birch Street",
            phone: "654-321-0987"
          },
          {
            id: 6,
            email: "user1@example.com",
            name: "John Doe",
            password: "password1",
            address: "123 Main Street",
            phone: "123-456-7890",
            country: "United States",
            city: "New York"
          },
          {
            id: 7,
            email: "user1@example.com",
            name: "John Doe",
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
            name: "John Doe",
            password: "password1",
            address: "123 Main Street",
            phone: "123-456-7890",
            country: "United States",
            city: "New York"
          },
          {
            id: 10,
            email: "user1@example.com",
            name: "John Doe",
            password: "password1",
            address: "123 Main Street",
            phone: "123-456-7890",
            country: "United States",
            city: "New York"
          },

    ];

  
    async getUsers(){
        return this.users
    }
    async getById(id: number) {
        return this.users.find((user) => user.id === id)
    } 
    async createUser(newUser: any) {
      const id = this.users.reduce((maxId, user) => (user.id > maxId ? user.id : maxId), 0) + 1;
      const userWithId = { id, ...newUser };
      this.users.push(userWithId);
      return userWithId;
  }
  async deleteUser(id: number) {
    const index = this.users.findIndex((user) => user.id === id);
    if (index === -1) {
        throw new Error(`User with id ${id} not found`);
    }
    this.users.splice(index, 1);
    return { message: `User with id ${id} deleted successfully` };
    }

  async updateUsers(id:Number , user:any){
    const index = this.users.findIndex((user) => user.id === id);
    if (index === -1) {
        throw new Error(`User with id ${id} not found`);
    }
    this.users[index] = {...this.users[index],...user}
    return this.users[index];
  }
}

