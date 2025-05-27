import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { PRODUCTS } from 'src/mocks/products.mock';
import { IProduct } from './entities/product.entity';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get('all')
  findAll() {
    return this.productsService.findAll();
  }
  
  @Get('product/:id')
  async findOne(@Param('id') id: string) {
    const book = await this.productsService.findOne(+id);
    return book
  }
  
  @Post('create')
  create(@Body() createProductDto: IProduct) {
    return this.productsService.create(createProductDto);
  }

  @Patch('update-product/:id')
  update(@Param('id') id: string, @Body() updateProductDto: IProduct) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
