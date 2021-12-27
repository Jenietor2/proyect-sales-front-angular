import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from '../../service/product.service';
import { Product } from '../../interfaces/product.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styles: [],
})
export class AddProductComponent implements OnInit {
  @ViewChild('productForm') productForm!: NgForm;

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {}

  create(productForm: NgForm) {
    if (productForm.valid) {
      let product: Product = {
        name: productForm.form.value.producto,
        unitValue: productForm.form.value.unitValue,
      };
      // console.log('Formulario valido');
      this.productService.createProduct(product).subscribe((resp) => {
        this.router.navigate(['']);
      });
    } else {
      console.log('Formulario invalido');
    }
  }

  /*validateName():boolean{
  return this.productForm?.controls.producto.invalid &&  this.productForm?.controls.producto?.touched
}*/
}
