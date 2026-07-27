import { IsString, IsNumber, IsArray, IsNotEmpty, IsOptional } from 'class-validator';

export class OrderItemDto {
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
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  image?: string;

  @IsArray()
  @IsOptional()
  images?: string[];

  @IsString()
  @IsNotEmpty()
  sellerId: string;

  @IsString()
  @IsNotEmpty()
  status: string;

  @IsString()
  @IsOptional()
  promoCode?: string;

  @IsNumber()
  @IsOptional()
  discountPercent?: number;
}

export class CreateOrderDto {
  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsString()
  @IsNotEmpty()
  userName: string;

  @IsString()
  @IsNotEmpty()
  userEmail: string;

  @IsArray()
  @IsNotEmpty()
  items: OrderItemDto[];
}