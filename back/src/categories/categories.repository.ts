import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm";
import { Categories } from "./categories.entities";
import * as data from "../utils/data.json"


@Injectable()
export class CategoriesRepository {
    constructor (
        @InjectRepository(Categories)
        private categoriesRepository: Repository<Categories>
    )
    {}
    async getCategories(){
        return await this.categoriesRepository.find()
    }

    async addCategories(){
        data?.map(async(element) => {
            await this.categoriesRepository
            .createQueryBuilder()
            .insert()
            .into(Categories)
            .values({name:element.category})
            .orIgnore()
        });
        return 'Categorias Agregadas'
    }
}