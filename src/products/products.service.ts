import { Injectable } from '@nestjs/common';
import { PRODUCTS } from 'src/mocks/products.mock';
import { IProduct } from './entities/product.entity';

@Injectable()
export class ProductsService {
  products = PRODUCTS;

  findAll(): IProduct[] {
    console.log('This action returns all products');
    return this.products;
  }

  findOne(id: number): IProduct | undefined {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      console.log('Product does not exist!');
    }
    console.log(`This action returns a #${id} product`);
    return product;
  }
  
  create(product: IProduct) {
    const lastId = this.products[this.products.length - 1].id;

    const newProd = {
        id: lastId + 1,
        name: product.name,
        description: product.description,
        price: product.price
      };

      this.products.push(newProd);
      console.log ('This action adds a new product');
      return newProd;
    }

  update(id: number, product: IProduct) {
    const index = this.products.findIndex((p) => p.id === id);
    if (index !== -1) {
      const updatedProduct = {
        id,
        name: product.name,
        description: product.description,
        price: product.price,
      };
      this.products[index] = updatedProduct;
      console.log(`This action updates a #${id} product`);
      return updatedProduct;
    } else {
      return `product with id ${id} not found`;
    }
  }

  remove(id: number): string {
    const index = this.products.findIndex((c) => c.id === id);
     if (index !== -1) {
      this.products.splice(index, 1);
      return `product with id ${id} deleted successfully`;
    }
    return `product with id ${id} not found`;
  }
}
