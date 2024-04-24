import { Controller, Get} from '@nestjs/common';
import { ProductService } from './products.services';
//import { Product } from './product.entity';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getProducts() {
    return this.productService.getProducts();
  } 

}