import { IsString, IsNotEmpty, IsInt, IsOptional, IsEmail } from 'class-validator';

export class CreateProductDto {

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsInt()
  @IsNotEmpty()
  price: number;

  @IsEmail()
  @IsNotEmpty()
  createdBy: string;
}

export class GetProductDto{

  @IsEmail()
  @IsNotEmpty()
  createdBy: string;

}

export class DeleteProductDto{

  @IsString()
  @IsNotEmpty()
  id: string;

}
