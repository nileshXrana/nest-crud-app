import { Injectable } from '@nestjs/common';
import { Product } from './interface/product.interface';
import { randomUUID } from 'crypto';
import { CreateProductDto, DeleteProductDto } from './dto/product.dto';

@Injectable()
export class ProductsService {
    products: Product[] = []

    getProducts(createdBy: string): Product[] {
        if (createdBy) {
            return this.products.filter(p => p.createdBy === createdBy);
        }
        return [];
    }

    addProduct(product: CreateProductDto): string {
        const id = randomUUID();
        const pro = { ...product, id };
        this.products.push(pro);
        console.log(pro);
        return "product added !"
    }

    deleteProduct(product: DeleteProductDto): string {
        const index = this.products.findIndex(p => p.id === product.id);
        if (index !== -1) {
            this.products.splice(index, 1);
            return "product deleted !"
        } else {
            return "product not found !"
        }
    }

    updateProduct(product: Product): string {
        const index = this.products.findIndex(p => p.id === product.id);
        if (index !== -1) {
            this.products[index] = product;
            return "product updated successfully"
        } else {
            return "product not found !"
        }
    }


}
