import { Component, OnInit } from '@angular/core';
import { ProductFormGroup } from '../../forms/productformgroup';
import { Product } from 'src/app/models/product';
import { NgForm } from '@angular/forms';
import { ProductRepositoryService } from 'src/app/models/repository/product.repository.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  productForm: ProductFormGroup;
  product: Product;

  constructor(private service: ProductRepositoryService) {

  }

  ngOnInit() {
    this.product = new Product();
    this.productForm = new ProductFormGroup(this.product);   

  }


  submitForm() {
    
    if (this.productForm.valid) 
    {   
      //use for edit   
      //this.product = this.productForm.value;     
      //console.log("save form");
      this.service.add(this.productForm.value);
    }else {
      console.log(this.productForm.getFormValidationMessages(this.productForm));
      console.log('Error saving product');

    }


  }

}
