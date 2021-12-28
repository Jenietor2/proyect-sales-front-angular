import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { CustomerModel } from '../../model/customer.model';
import { CustomerService } from '../../service/customer.service';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styles: [
  ]
})
export class ListCustomerComponent implements OnInit {

  customers: CustomerModel[] = [];

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe( resp=>{
      this.customers = resp;
    });
  }

  deleteCustomer(id:any){
    Swal.fire({
      title: 'Confirmación?',
      text: "Esta seguro que desea eliminar el cliente",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, deseo eliminarlo!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Eliminado!', 'El cliente se elimino correctamente.', 'success');

        this.customers = this.removeItemFromArr(this.customers, id);
        this.customerService.deleteCustomer(id).subscribe(resp =>{
        });
      }
    });
  }


  removeItemFromArr( arr:CustomerModel[], id:string ):CustomerModel[]  {
    return arr.filter( ( e ) => {
        return e.id !== id;
    } );
  }
}
