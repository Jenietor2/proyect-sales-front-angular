import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

import { CustomerModel } from 'src/app/customer/model/customer.model';
import { ProductModel } from 'src/app/product/model/product.model';
import { CustomerService } from '../../../customer/service/customer.service';
import { ProductService } from '../../../product/service/product.service';
import { SaleModel, SaleLines } from '../../model/sale.model';
import { SaleService } from '../../service/sale.service';

@Component({
  selector: 'app-add-sale',
  templateUrl: './add-sale.component.html',
  styles: [],
})
export class AddSaleComponent implements OnInit {
  products: ProductModel[] = [];
  customerId: string = '';
  sale: SaleModel = new SaleModel();
  saleLine: SaleLines = new SaleLines();
  saleLines: SaleLines[] = [];
  totalLine: number = 0;
  quantity: number = 1;

  constructor(
    private productService: ProductService,
    private activateRoute: ActivatedRoute,
    private saleService: SaleService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.customerId = this.activateRoute.snapshot.params['id'];

    this.productService.getProducts().subscribe((resp) => {
      this.products = resp;
    });
  }

  agregarProdcuto(producto: ProductModel) {
    if (this.sale.SaleLines.length === 0) {

      this.createSaleLine(producto);

      this.sale.SaleLines.push(this.saleLine);
    } else {
      this.sale.SaleLines.forEach((line) => {
        if (line.IdProduct === producto.id) {
          line.Quantity += 1;
          line.TotalValueForLine += producto.unitValue;
        } else {
          if (!this.sale.SaleLines.find((elemet) => elemet.IdProduct === producto.id)) {

            this.createSaleLine(producto);

            this.sale.SaleLines.push(this.saleLine);
          }
        }
      });
    }
    let total = 0;
    this.sale.SaleLines.forEach((element) => {
      total += element.TotalValueForLine;
    });

    this.sale.TotalValue = total;

    //console.log(this.sale);
  }
 //fill saleLine
  createSaleLine(producto: ProductModel){
    this.saleLine = new SaleLines();
    this.saleLine.IdCustomer = this.customerId;
    this.saleLine.IdProduct = producto.id;
    this.saleLine.Quantity = 1;
    this.saleLine.UnitValue = producto.unitValue;
    this.saleLine.TotalValueForLine += producto.unitValue;
  }

  payment(){

    this.saleService.createSale(this.sale).subscribe(resp =>{
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Factura pagada exitosamente',
        showConfirmButton: false,
        timer: 2500
      });

      this.router.navigate(['list-customer']);
      //this.router.navigate(['/list-sale', this.customerId]);
    });
  }
}
