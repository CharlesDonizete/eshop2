import { ProductModel } from './models/product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public url = 'http://localhost:3002/v1';

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<ProductModel[]>(`${this.url}/products`);
  }
}
