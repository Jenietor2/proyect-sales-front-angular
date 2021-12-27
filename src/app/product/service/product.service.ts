import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private urlBase: string = 'https://localhost:44315/api/Product';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.urlBase);
  }

  getProductById(id:string) : Observable<Product>{
    return this.http.get<Product>(`${this.urlBase}/${id}`);
  }

  createProduct(product:Product):Observable<Product>{
    return this.http.post<Product>(this.urlBase, product);
  }

  updateProduct(product:Product):Observable<Product>{
    return this.http.put<Product>(this.urlBase, product);
  }
}
