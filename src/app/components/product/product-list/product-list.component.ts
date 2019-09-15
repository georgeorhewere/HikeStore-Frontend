import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Paginator } from '../../utilities/paginator';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input("products")
  productList: Product[];
  
  @Input("paginator")
  paginator: Paginator<Product>;

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
    const pageIndex = this.paginator.selectedPage * this.paginator.itemsPerPage;
    return this.productList.slice(pageIndex, pageIndex + this.paginator.itemsPerPage);
  }

  changePage(index: number) {
    this.paginator.selectedPage = index - 1;
  }

}
