import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductComponent } from './product/pages/list-product/list-product.component';
import { AddProductComponent } from './product/pages/add-product/add-product.component';
import { ListCustomerComponent } from './customer/pages/list-customer/list-customer.component';
import { AddCustomerComponent } from './customer/pages/add-customer/add-customer.component';
import { AddSaleComponent } from './sale/pages/add-sale/add-sale.component';
import { ListSaleComponent } from './sale/pages/list-sale/list-sale.component';
import { EditProductComponent } from './product/pages/edit-product/edit-product.component';
import { DeleteCustomerComponent } from './customer/pages/delete-customer/delete-customer.component';


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
    path: 'list-customer',
    component: ListCustomerComponent,
  },
  {
    path: 'create-customer/:id',
    component: AddCustomerComponent,
  },
  {
    path: 'delete-customer/:id',
    component: DeleteCustomerComponent,
  },
  {
    path: 'create-sale/:id',
    component: AddSaleComponent,
  },
  {
    path: 'list-sale/:id',
    component: ListSaleComponent,
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
