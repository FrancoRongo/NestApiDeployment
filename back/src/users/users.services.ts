import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersServices {
    getUsers() {
        return 'Get all Users';
    }
}