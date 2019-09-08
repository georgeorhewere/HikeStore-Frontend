import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/models/repository/store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.css']
})
export class ProductHomeComponent implements OnInit {

  constructor (public service: StoreService, private router:Router) { 

  }

  ngOnInit() {
  }

  get repository(){
    return this.service.productRepository.list();
  }
  get paginator(){
    return this.service.productRepository.paginator;
  }

}
