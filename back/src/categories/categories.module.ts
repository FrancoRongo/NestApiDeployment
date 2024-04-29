import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoriesControllers} from "./categories.controller";
import { CategoriesServices } from "./categories.services";
import { CategoriesRepository } from "./categories.repository";
import { Categories } from "./categories.entities";


@Module({
  imports: [TypeOrmModule.forFeature([Categories])],
  controllers: [CategoriesControllers],
  providers: [CategoriesServices, CategoriesRepository],
})
export class CategoriesModule {}
