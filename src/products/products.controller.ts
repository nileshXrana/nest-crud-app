import { Controller, Get, Post, Header, Body, Delete, Put, Param, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './interface/product.interface';
import { CreateProductDto, DeleteProductDto } from './dto/product.dto';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) { }

    @Get()
    getProducts(@Query('createdby') createdby: string): Product[] {
        return this.productsService.getProducts(createdby);
    }

    @Post()
    addProduct(@Body() product: CreateProductDto): string {
        return this.productsService.addProduct(product);
    }

    @Delete()
    deleteProduct(@Body() product: DeleteProductDto): string {
        return this.productsService.deleteProduct(product);
    }

    @Put()
    updateProduct(@Body() product: CreateProductDto): string {
        return this.productsService.updateProduct(product);
    }

}
