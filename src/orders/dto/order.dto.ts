import { IsString, IsNumber, IsArray, IsNotEmpty } from 'class-validator';

export class OrderDto {
    @IsString()
    @IsNotEmpty()
    status: string;

    @IsString()
    promoCode: string;

    @IsNumber()
    discountPercent: number;

    @IsString()
    @IsNotEmpty()
    id: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNumber()
    @IsNotEmpty()
    price: number;

    @IsNumber()
    @IsNotEmpty()
    quantity: number;

    @IsString()
    image: string;

    @IsArray()
    images: string[];
}