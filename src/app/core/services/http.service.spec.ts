import { TestBed } from '@angular/core/testing';

import { HttpService } from './http.service';
import {  HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

describe('HttpService', () => {
  let service: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, HttpClientModule]
    });
    service = TestBed.inject(HttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
