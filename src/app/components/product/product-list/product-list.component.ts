import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Paginator } from '../../utilities/paginator';
import { ProductRepositoryService } from 'src/app/models/repository/product.repository.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  /*
  @Input("paginator")
  paginator: Paginator<Product>; */
  @Input("modelservice")
  modelservice : ProductRepositoryService;


  @Output()
  editProduct = new EventEmitter<number>();

  @Output()
  deleteProduct = new EventEmitter<number>();

  constructor() { 

  }

  ngOnInit() {
    
  }

  getProducts(): Product[] {
    const pageIndex = this.modelservice.paginator.selectedPage * this.modelservice.paginator.itemsPerPage;
    return  this.modelservice.list().slice(pageIndex, pageIndex + this.modelservice.paginator.itemsPerPage);
    
  }

  changePage(index: number) {
    this.modelservice.paginator.selectedPage = index - 1;
  }

  get paginator(){
    return this.modelservice.paginator;
  }

}
