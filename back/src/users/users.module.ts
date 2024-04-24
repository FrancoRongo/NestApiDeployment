import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UsersServices } from "./users.services";

@Module({
 imports: [],
 controllers:[UsersController],
 providers:[UsersServices],
})

export class UsersModule {}