import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'product-list-page',
  templateUrl: './list-page.component.html',
  styles: ``
})
export class ListPageComponent implements OnInit {

  public productList?: Product[];

  @Input()
  public searchTerm: string = '';

  constructor( private productService: ProductService ) { }

  ngOnInit(): void {
    this.productList = this.productService.getProductList();
  }
}
