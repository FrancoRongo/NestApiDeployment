/*import { Controller, Get, Post, Put, Delete, Param, Body, HttpCode } from '@nestjs/common';
import { ProductService } from './products.services';
import { ProductsRepository } from './products.repository';


@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

 @HttpCode(200)
 @Get()
 getProducts(){
  return this.productService.getProducts();
 }

 @HttpCode(200)
 @Get(':id')
 getProductsById(@Param('id')id:string){
  return this.productService.getProductsById(Number(id));
 }

 @HttpCode(201)
 @Post()
 createProduct(@Body()Products:ProductsRepository){
  return this.productService.createProducts(Products);
 }

 @HttpCode(200)
 @Put()
 updateProducts(){

 }
 @HttpCode(200)
 @Delete(':id')
 deteleProducts (@Param('id') id:string){
  return this.productService.deteleProducts(Number(id));
 }

  
}*/