import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCustomerComponent } from './pages/add-customer/add-customer.component';
import { EditCustomerComponent } from './pages/edit-customer/edit-customer.component';
import { ListCustomerComponent } from './pages/list-customer/list-customer.component';
import { DeleteCustomerComponent } from './pages/delete-customer/delete-customer.component';



@NgModule({
  declarations: [
    AddCustomerComponent,
    EditCustomerComponent,
    ListCustomerComponent,
    DeleteCustomerComponent
  ],
  exports:[
    AddCustomerComponent,
    EditCustomerComponent,
    ListCustomerComponent,
    DeleteCustomerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CustomerModule { }
