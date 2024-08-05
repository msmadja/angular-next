import { Injectable, signal, WritableSignal } from "@angular/core";
import { Product } from "./products.type";
import { HttpService } from "../core/services";
import { firstValueFrom } from "rxjs";

@Injectable({providedIn: 'root'})
export class ProductsService { 

private products: WritableSignal<Product[]> = signal([{name: Date.now().toString(), price: Date.now()}]);

public get products$() { 
   return this.products();
}

constructor(private readonly httpService: HttpService) {}
 
 async refresh(): Promise<void> { 
  const products = await  firstValueFrom(this.httpService.get<Product[]>('products'));
  this.products.set(products);
 }

 async addProduct(product: Product): Promise<void> { 
    const createdProduct = await firstValueFrom(this.httpService.post<Product>('products', product));
    this.products.set([...this.products(), createdProduct]);

 }

}