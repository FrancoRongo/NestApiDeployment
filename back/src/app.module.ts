import { ConfigurableModuleBuilder, Module } from '@nestjs/common';
import { CategoriesModule } from './categories/categories.module';
import { DataSource } from 'typeorm';
//import { UsersModule } from './users/users.module';
//import { ProductsModule } from './products/products.module';
//import { AuthModule } from './auth/auth.module';

@Module({
  
  imports: /*[UsersModule, ProductsModule, AuthModule]*/[CategoriesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
