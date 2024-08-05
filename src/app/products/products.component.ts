import { AfterViewInit, Component, computed, ElementRef, OnInit, QueryList, signal, Signal, ViewChildren } from '@angular/core';
import { ProductsService } from './products.service';
import { Product } from './products.type';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [SharedModule, CommonModule, MatButtonModule, MatCardModule, MatChipsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit, AfterViewInit{

 @ViewChildren('p') paragraph!: QueryList<ElementRef>;

 constructor(public readonly productsService: ProductsService) {
 }

 ngOnInit() { 
   this.productsService.refresh();
 }

 ngAfterViewInit() { 
  console.log(this.paragraph);
 }

 addProduct(): void { 
   const product: Product = {name: Date.now().toString(), price: Date.now()};
   this.productsService.addProduct(product);
 }

}
