import { Repository } from "typeorm";
import { User } from "./users.entity";
import { CreateUserDto } from "./user.dto";
export declare class UsersRepository {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    getAdmin(): Promise<User[]>;
    getUsers(): Promise<User[]>;
    getUserById(id: string): Promise<User>;
    getUsersByCountry(country: string): Promise<User[]>;
    getUsersPaginated(offset: number, limit: number): Promise<User[]>;
    getTotalCount(): Promise<number>;
    createUser(userDto: CreateUserDto, createdAt: string): Promise<{
        newUser: User;
        createdAt: string;
    }>;
    updateUserToAdmin(id: string): Promise<User>;
    updateUser(id: string, updateUserDto: Partial<User>): Promise<User>;
    deleteUser(id: string): Promise<User>;
    getUserByEmail(email: string): Promise<User>;
    getUserByName(name: string): Promise<User>;
}
