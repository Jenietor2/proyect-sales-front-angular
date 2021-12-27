import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductComponent } from './product/pages/list-product/list-product.component';
import { AddProductComponent } from './product/pages/add-product/add-product.component';
import { ListCustomerComponent } from './customer/pages/list-customer/list-customer.component';
import { AddCustomerComponent } from './customer/pages/add-customer/add-customer.component';
import { AddSaleComponent } from './sale/pages/add-sale/add-sale.component';
import { EditProductComponent } from './product/pages/edit-product/edit-product.component';
import { EditCustomerComponent } from './customer/pages/edit-customer/edit-customer.component';
import { DeleteCustomerComponent } from './customer/pages/delete-customer/delete-customer.component';
import { DeleteProductComponent } from './product/pages/delete-product/delete-product.component';

const routes: Routes = [
  {
    path: '',
    component: ListProductComponent,
    pathMatch: 'full',
  },
  {
    path: 'create-product',
    component: AddProductComponent,
  },
  {
    path: 'edit-product/:id',
    component: EditProductComponent,
  },
  {
    path: 'delete-product/:id',
    component: DeleteProductComponent
  },
  {
    path: 'list-customer',
    component: ListCustomerComponent,
  },
  {
    path: 'create-customer',
    component: AddCustomerComponent,
  },
  {
    path: 'edit-customer',
    component: EditCustomerComponent,
  },
  {
    path: 'delete-customer/:id',
    component: DeleteCustomerComponent,
  },
  {
    path: 'create-sale',
    component: AddSaleComponent,
  },
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
