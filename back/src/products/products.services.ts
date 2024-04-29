/*import { Injectable } from '@nestjs/common';
import { ProductsRepository } from './products.repository';
import { identity } from 'rxjs';


@Injectable()
export class ProductService {
  
 
  constructor (private productsRepository:ProductsRepository) {}
  async getProducts(){
    const dbProducts = await this.productsRepository.getProducts()
    return dbProducts

  }
  async getProductsById(id: number) {
    const products = await this.productsRepository.getById(id);
    if(!products){
      throw new Error(`Products with id ${id} not found`)
    }
    return products;
    
  }
  async createProducts (products:ProductsRepository){
    return this.productsRepository.createProducts(products);
  }
  async deteleProducts(id: number) {
    return this.productsRepository.deteleProducts(id);
  }
  
}*/
 

