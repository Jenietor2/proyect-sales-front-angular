import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomerModel } from '../model/customer.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  urlBase: string = 'https://localhost:44315/api/Customer';

  constructor(private httpClient:HttpClient) { }

  getCustomers():Observable<CustomerModel[]>{
    return this.httpClient.get<CustomerModel[]>(this.urlBase);
  }

  getCustomerById(id:string):Observable<CustomerModel>{
    return this.httpClient.get<CustomerModel>(`${this.urlBase}/${id}`);
  }

  createCustomer(customer:CustomerModel){
    return this.httpClient.post(this.urlBase, customer);
  }

  updateCustomer(customer:CustomerModel):Observable<CustomerModel>{
    return this.httpClient.put<CustomerModel>(this.urlBase, customer);
  }

  deleteCustomer(id:string):Observable<string>{
    return this.httpClient.delete<string>(`${this.urlBase}/${id}`);
  }
}
