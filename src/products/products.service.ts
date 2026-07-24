import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './interface/product.interface';
import { randomUUID } from 'crypto';
import { CreateProductDto, DeleteProductDto } from './dto/product.dto';

@Injectable()
export class ProductsService {
    products: Product[] = []

    addProduct(product: CreateProductDto): object {
        const id = randomUUID();
        const pro = { ...product, id };
        this.products.push(pro);
        return { ...pro, status: "product added successfully", }
    }

    getProducts(): Product[] {
        return this.products;
    }

    getProductsById(id: string): Product[] {
        const products = this.products.filter(p => p.sellerId === id);
        if (products.length > 0) {
            return products;
        }
        else {
            throw new NotFoundException(`No products found for this seller.`);
        }
    }

    // deleteProduct(product: DeleteProductDto): string {
    //     const index = this.products.findIndex(p => p.id === product.id);
    //     if (index !== -1) {
    //         this.products.splice(index, 1);
    //         return "product deleted !"
    //     } else {
    //         return "product not found !"
    //     }
    // }

    // updateProduct(product: Product): string {
    //     const index = this.products.findIndex(p => p.id === product.id);
    //     if (index !== -1) {
    //         this.products[index] = product;
    //         return "product updated successfully"
    //     } else {
    //         return "product not found !"
    //     }
    // }


}
