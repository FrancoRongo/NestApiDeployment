/*import { Injectable } from "@nestjs/common";
import { max, throwError } from "rxjs";

@Injectable()
export class ProductsRepository{
    

   
    private products = [
        {
            id: 1,
            name: "Laptop HP Pavilion",
            description: "Powerful laptop with Intel Core i7 processor and 16GB RAM.",
            price: 999.99,
            stock: true,
            imgUrl: "https://example.com/laptop1.jpg"
          },
          {
            id: 2,
            name: "Smartphone Samsung Galaxy",
            description: "Latest smartphone with 6.5-inch display and 128GB storage.",
            price: 799.99,
            stock: true,
            imgUrl: "https://example.com/smartphone1.jpg"
          },
          {
            id: 3,
            name: "Wireless Headphones",
            description: "High-quality wireless headphones with noise-canceling technology.",
            price: 149.99,
            stock: false,
            imgUrl: "https://example.com/headphones1.jpg"
          },
          {
            id: 4,
            name: "Smart Watch",
            description: "Fitness tracker and smartwatch with heart rate monitor and GPS.",
            price: 199.99,
            stock: true,
            imgUrl: "https://example.com/smartwatch1.jpg"
          },
          {
            id: 5,
            name: "4K Smart TV",
            description: "65-inch 4K Ultra HD Smart TV with built-in streaming apps.",
            price: 1499.99,
            stock: true,
            imgUrl: "https://example.com/tv1.jpg"
          }
    ];

    async getProducts(){
        return this.products
    }
    async getById(id: number) {
      return this.products.find((products)=>products.id === id)
      
    }
    async createProducts(newProducts: any) {
      const id = this.products.reduce((maxId, products) => (products.id > maxId ? products.id : maxId), 0) + 1;
      const productsWithId = { id, ... newProducts};
      this.products.push(productsWithId);
      return productsWithId
    }
    async deteleProducts(id: number) {
      const index = this.products.findIndex((user) => user.id === id);
      if (index === -1){
        throw new Error (`Products whith id ${id} not found`);
      }
      this.products.splice(index, 1);
      return {message: `Products with id ${id} delete successfully`}
      
    }
    

        
}*/