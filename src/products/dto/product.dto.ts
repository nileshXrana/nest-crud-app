
import { IsEmail, IsString, IsNotEmpty, IsInt } from 'class-validator';

export class CreateProductDto {

  @IsString()
  name!: string;

  @IsString()
  category!: string;

  @IsString()
  description!: string;

  @IsInt()
  price!: number;

  @IsEmail()
  createdBy!: string;
}