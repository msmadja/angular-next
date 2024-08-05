import { TestBed } from '@angular/core/testing';

import { ProductsService } from './products.service';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule, 
        SharedModule,
        HttpClientTestingModule
      ],
      providers: [ProductsService],
    });
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
