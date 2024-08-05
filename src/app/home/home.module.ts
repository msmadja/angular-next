import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRouterModule } from './home.module.routes';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    HomeRouterModule,
    CommonModule,
    SharedModule,
  ],
})
export class HomeModule { }
