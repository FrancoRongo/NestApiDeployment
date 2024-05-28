import { User } from "./users.entity";
import { CreateUserDto } from "./user.dto";
import { UsersRepository } from "./users.repository";
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: UsersRepository);
    createUser(createUserDto: CreateUserDto, createdAt: string): Promise<{
        newUser: {
            newUser: User;
            createdAt: string;
        };
        createdAt: string;
    }>;
    getAdmin(page?: number, limit?: number): Promise<{
        users: any[];
        totalPages: number;
        totalCount: number;
    }>;
    getUsers(page?: number, limit?: number): Promise<{
        users: any[];
        totalPages: number;
        totalCount: number;
    }>;
    getUsersByCountry(country: string): Promise<User[]>;
    getUserByEmail(email: string): Promise<User>;
    getUserByName(name: string): Promise<User>;
    getUserById(id: string): Promise<User>;
    updateToUserAdmin(id: string): Promise<User>;
    updateUser(id: string, updateUserDto: Partial<User>): Promise<{
        id: string;
        name: string;
        email: string;
        phone: number;
        country: string;
        address: string;
        city: string;
        isSuperAdmin: boolean;
        createdAt: string;
        orders: import("../orders/orders.entity").Order[];
    }>;
    deleteUser(id: string): Promise<User>;
}
