import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({ 
  imports: [
    CommonModule,
    MatSlideToggleModule
  ],
  providers: [],
  exports: [
    CommonModule,
    MatSlideToggleModule
  ]
})
export class SharedModule {}