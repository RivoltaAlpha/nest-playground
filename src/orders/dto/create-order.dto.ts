import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

interface OrderItem {
        productId: string;
        quantity: number;
        price: number;
    }
export class CreateOrderDto {
    @IsNotEmpty()
    @IsString()
    customerName: string;

    @IsOptional()
    @IsArray()
    items: OrderItem[];

    @IsNotEmpty()
    @IsNumber()
    totalAmount: number;
}
