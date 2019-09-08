import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input("products")
  productList: Product[];

  @Output()
  editProduct = new EventEmitter<number>();

  @Output()
  deleteProduct = new EventEmitter<number>();

  constructor() { 

  }

  ngOnInit() {
    console.log(this.productList);
  }

  getProducts(): Product[] {
    return this.productList;
  }

}
