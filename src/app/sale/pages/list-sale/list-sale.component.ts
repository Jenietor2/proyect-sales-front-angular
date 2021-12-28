import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {switchMap} from 'rxjs/operators';
import { SaleModel } from '../../model/sale.model';
import { SaleService } from '../../service/sale.service';

@Component({
  selector: 'app-list-sale',
  templateUrl: './list-sale.component.html',
  styles: [],
})
export class ListSaleComponent implements OnInit {

  id = '';
  sale: SaleModel = new SaleModel();

  constructor(
    private saleService: SaleService,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];

    this.saleService.getByCustomerId(this.id).subscribe(
      saleResponse =>{


        this.sale = saleResponse;
        console.log("Sales: ",this.sale);
      }
    );

   /* this.activateRoute.params
      .pipe(switchMap(({ id }) => this.saleService.getByCustomerId(id)))
      .subscribe((saleResponse) => (this.sales = saleResponse));*/
  }
}
