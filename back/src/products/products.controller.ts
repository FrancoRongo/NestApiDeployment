import { Controller, Get, Post, Put, Delete, Param, Body, HttpStatus } from '@nestjs/common';
import { ProductService } from './products.services';


@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  /*@Get()
  async getProducts(): Promise<Product[]> {
    return this.productService.getProducts();
  }

  @Get(':id')
  async getProductById(@Param('id') id: string): Promise<Product> {
    return this.productService.getProductById(id);
  }

  @Post()
  async createProduct(@Body() product: Product): Promise<{ id: string }> {
    const createdProduct = await this.productService.createProduct(product);
    return { id: createdProduct.id };
  }

  @Put(':id')
  async updateProduct(@Param('id') id: string, @Body() product: Product): Promise<{ id: string }> {
    const updatedProduct = await this.productService.updateProduct(id, product);
    return { id: updatedProduct.id };
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: string): Promise<{ id: string }> {
    await this.productService.deleteProduct(id);
    return { id };
  }
}*/
}
