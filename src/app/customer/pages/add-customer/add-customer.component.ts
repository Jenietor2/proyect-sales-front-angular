import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { CustomerModel } from '../../model/customer.model';
import { CustomerService } from '../../service/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styles: [],
})
export class AddCustomerComponent implements OnInit {
  customer: CustomerModel = new CustomerModel();

  constructor(
    private customerService: CustomerService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activateRoute.params
      .pipe(switchMap(({ id }) => this.customerService.getCustomerById(id)))
      .subscribe((customer) => (this.customer = customer));
  }

  createOrUpdate(customerForm: NgForm) {
    console.log(customerForm);
    console.log(this.customer);

    if (customerForm.invalid) {
      console.log('Formulario invalido');
      return;
    }
    if (this.customer.id) {
      this.customerService.updateCustomer(this.customer).subscribe(resp =>{
        this.router.navigate(['list-customer']);
      });
    } else {
      delete this.customer.id;
      this.customerService.createCustomer(this.customer).subscribe((resp) => {
        this.router.navigate(['list-customer']);
      });
    }

    /*this.customerService.createCustomer(customer).subscribe(
      (customer):any =>{
        console.log(customer);
      }
    );*/
  }
}
