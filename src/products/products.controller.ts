import { Controller, Get, Post, Header, Body, Delete, Put, Param } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './interface/product.interface';
import { CreateProductDto } from './dto/product.dto';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) { }

    @Get()
    getProducts(
        @Body() body: CreateProductDto,
    ): Product[] {
        return this.productsService.getProducts(body.createdBy);
    }

    @Post()
    addProduct(@Body() product: CreateProductDto): string {
        return this.productsService.addProduct(product);
    }

    @Delete()
    deleteProduct(@Body() product: CreateProductDto): string {
        return this.productsService.deleteProduct(product);
    }

    @Put()
    updateProduct(@Body() product: CreateProductDto): string {
        return this.productsService.updateProduct(product);
    }

}
