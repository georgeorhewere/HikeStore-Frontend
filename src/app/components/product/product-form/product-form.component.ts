import { Component, OnInit } from '@angular/core';
import { ProductFormGroup } from '../../forms/productformgroup';
import { Product } from 'src/app/models/product';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  productForm: ProductFormGroup;
  product: Product = new Product();

  constructor() {

  }

  ngOnInit() {
    this.product = new Product();
    this.productForm = new ProductFormGroup(this.product);
    

  }


  submitForm() {
    
    if (this.productForm.valid) 
    {      
      this.product = this.productForm.value;     
      console.log("save form");
    } 
    else {
      console.log(this.productForm.getFormValidationMessages(this.productForm));
      console.log('Error saving product');

    }


  }

}
