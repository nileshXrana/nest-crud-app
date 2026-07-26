import { Controller, Get, Post, Header, Body, Delete, Put, Param, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import type { Product } from './interface/product.interface';
import { CreateProductDto, DeleteProductDto } from './dto/product.dto';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) { }

    @Get()
    getProducts(@Query('email') email?: string): Product[] {
        if (email) {
            return this.productsService.getProductsByEmail(email);
        }
        return this.productsService.getProducts();
    }

    @Post()
    addProduct(@Body() product: CreateProductDto): object {
        return this.productsService.addProduct(product);
    }

    @Get(':id')
    getProductById(@Param('id') id: string): Product {
        return this.productsService.getProductById(id);
    }

    // @Delete()
    // deleteProduct(@Body() product: DeleteProductDto): string {
    //     return this.productsService.deleteProduct(product);
    // }

    // @Put()
    // updateProduct(@Body() product: CreateProductDto): string {
    //     return this.productsService.updateProduct(product);
    // }

}
