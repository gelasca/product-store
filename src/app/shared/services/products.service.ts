import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  httpClient = inject(HttpClient);

  getAll() {
    return this.httpClient.get<any>('http://localhost:3000/products')
  }
}
