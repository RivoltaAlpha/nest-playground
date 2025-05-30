import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { BooksModule } from './books/books.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [UsersModule, ProductsModule, OrdersModule, BooksModule,
    ConfigModule.forRoot({
      		isGlobal: true,
      		envFilePath: '.env',
   	 }),
    DatabaseModule,
	],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
