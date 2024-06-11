import { UsersService } from "./users.service";
import { User } from "./users.entity";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getAdmin(page?: number, limit?: number): Promise<{
        users: any[];
        totalPages: number;
        totalCount: number;
    }>;
    getUsers(page: number, limit: number): Promise<{
        users: any[];
        totalPages: number;
        totalCount: number;
    }>;
    getUserProfile(request: Request & {
        user: any;
    }): string;
    getUsersByCountry(country: string): Promise<User[]>;
    getUserById(id: string): Promise<User>;
    updateUserToAdmin(id: string, updateUserDto: Partial<User>): Promise<User>;
    updateUserToSuperAdmin(id: string, updateUserDto: Partial<User>): Promise<User>;
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
    deleteUser(id: string, req: any): Promise<User>;
}
