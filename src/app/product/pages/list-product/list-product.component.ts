import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styles: [
  ]
})
export class ListProductComponent implements OnInit {

  products: Product[]=[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts()
    .subscribe(products =>{

      this.products = products;
        //console.log(productsList);
    });
  }



}
