import { IsString, IsNotEmpty, IsNumber, IsEmail, IsBoolean, IsArray } from 'class-validator';

export class CreateProductDto {

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsBoolean()
  @IsNotEmpty()
  show: boolean;

  @IsString()
  @IsNotEmpty()
  sellerName: string;

  @IsArray()
  @IsString({ each: true })
  images: string[]

  @IsString()
  @IsNotEmpty()
  sellerId: string

}

export class DeleteProductDto {

  @IsString()
  @IsNotEmpty()
  id: string;

}
