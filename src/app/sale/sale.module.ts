import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddSaleComponent } from './pages/add-sale/add-sale.component';
import { ListSaleComponent } from './pages/list-sale/list-sale.component';



@NgModule({
  declarations: [
    AddSaleComponent,
    ListSaleComponent
  ],
  exports: [
    AddSaleComponent,
    ListSaleComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SaleModule { }
