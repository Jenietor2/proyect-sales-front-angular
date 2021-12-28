import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ProductModel } from '../../model/product.model';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styles: [],
})
export class ListProductComponent implements OnInit {
  products: ProductModel[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  deleteProduct(id: any) {
    Swal.fire({
      title: 'Confirmación?',
      text: "Esta seguro que desea eliminar el producto",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, deseo eliminarlo!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Eliminado!', 'El producto se elimino correctamente.', 'success');

        this.products = this.removeItemFromArr(this.products, id);
        this.productService.deleteProduct(id).subscribe();

      }
    });
  }

   removeItemFromArr( arr:ProductModel[], id:string ):ProductModel[]  {
    return arr.filter( ( e ) => {
        return e.id !== id;
    } );
};


}
