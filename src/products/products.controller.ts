import { Controller, Get, Post, Header, Body, Delete, Put, Param, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './interface/product.interface';
import { CreateProductDto, DeleteProductDto } from './dto/product.dto';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) { }

    @Get()
    getProducts(): Product[] {
        return this.productsService.getProducts();
    }

    @Post()
    addProduct(@Body() product: CreateProductDto): object {
        return this.productsService.addProduct(product);
    }

    @Get(':id')
    getProductsById(@Query('id') id: string): Product[] {
        return this.productsService.getProductsById(id);
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
