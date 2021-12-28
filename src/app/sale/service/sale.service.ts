import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SaleModel } from '../model/sale.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaleService {


  private urlBase : string = 'https://localhost:44315/api/Sale';

  constructor(private httpClient:HttpClient) { }

  createSale(sale: SaleModel){
    return this.httpClient.post<SaleModel>(`${this.urlBase}`, sale);
  }

  getByCustomerId(id: string):Observable<SaleModel>{
    return this.httpClient.get<SaleModel>(`${this.urlBase}/${id}`)
  }
}
