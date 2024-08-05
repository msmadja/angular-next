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
  const users = await  firstValueFrom(this.httpService.get('users'));
  console.log('users', users);
 }

 addProduct(product: Product): Product { 
    this.products.set([...this.products(), product]);
    console.log(this.products());
    return {} as unknown as Product;
 }

}