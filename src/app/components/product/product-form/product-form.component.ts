import { Component, OnInit } from '@angular/core';
import { ProductFormGroup } from '../../forms/productformgroup';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit 
{

  productForm: ProductFormGroup;
  product: Product;

  constructor() { 
  
  }

  ngOnInit() {
    this.productForm = new ProductFormGroup();
    console.log(this.productForm.productControls());
    this.product = new Product("",0);
  }

}
