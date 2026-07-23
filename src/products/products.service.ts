import { Injectable } from '@nestjs/common';
import { Product } from './interface/product.interface';
import { randomUUID } from 'crypto';

@Injectable()
export class ProductsService {
    products: Product[] = []

    getProducts(): Product[] {
        return this.products;
    }

    addProduct(product: Product): string {
        const uuid = randomUUID();
        const pro = { ...product, id: uuid };
        this.products.push(pro);
        console.log(pro);
        return "product added !"
    }

    deleteProduct(product: Product): string {
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

    getProductById(product: string) {

        // const index = this.products.findIndex(p => p.id === product.id);
        // if(index !== -1){
        //     return this.products[index]
        // }else{
        //     return {status: "product not found !"}
        // }
        return ""
    }


}
