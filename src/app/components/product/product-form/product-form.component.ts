import { Component, OnInit } from '@angular/core';
import { ProductFormGroup } from '../../forms/productformgroup';
import { Product } from 'src/app/models/product';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit
{

  productForm: ProductFormGroup;
  product: Product = new Product();

  constructor() {

  }

  ngOnInit() {
    this.productForm = new ProductFormGroup();    
    this.product = new Product();
    
  }


  submitForm(form: NgForm) {
    console.log(form)
    if (form.valid) {
      console.log('Save Product');
    }
    else
    {
      console.log('Error saving product');

    }

    
  }

}
