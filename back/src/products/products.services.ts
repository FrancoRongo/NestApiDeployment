import { Injectable } from '@nestjs/common';
import { ProductsRepository } from './products.repository';


@Injectable()
export class ProductService {
 
  constructor (private productsRepository:ProductsRepository) {}
  async getProducts(){
    const dbProducts = await this.productsRepository.getProducts()
    return dbProducts

  }
  
  /*getProductById(id: string): any {
    throw new Error('Method not implemented.');
  } 
  updateProduct(id: string, product: Product) {
    throw new Error('Method not implemented.');
  }
  createProduct(product: Product) {
    throw new Error('Method not implemented.');
  }
 deleteProduct(id: string) {
    throw new Error('Method not implemented.');
  }

  
}*/
}
 

