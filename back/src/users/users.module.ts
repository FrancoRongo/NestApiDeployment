import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UsersServices } from "./users.services";
import { UsersRepository } from "./users.repository";
import { LoggingGlobalMiddleware, Saludo } from "src/middleware/logger.middleware";

@Module({
 controllers:[UsersController],
 providers:[UsersServices, UsersRepository],
})

export class UsersModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggingGlobalMiddleware).forRoutes('users')
        consumer.apply(Saludo).forRoutes('users')
    }
}