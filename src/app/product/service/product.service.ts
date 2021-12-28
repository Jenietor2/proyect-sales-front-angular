import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../model/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private urlBase: string = 'https://localhost:44315/api/Product';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(this.urlBase);
  }

  getProductById(id:string) : Observable<ProductModel>{
    return this.http.get<ProductModel>(`${this.urlBase}/${id}`);
  }

  createProduct(product:ProductModel):Observable<ProductModel>{
    return this.http.post<ProductModel>(this.urlBase, product);
  }

  updateProduct(product:ProductModel):Observable<ProductModel>{
    return this.http.put<ProductModel>(this.urlBase, product);
  }
  deleteProduct(id:string) : Observable<ProductModel>{
    return this.http.delete<ProductModel>(`${this.urlBase}/${id}`);
  }
}
