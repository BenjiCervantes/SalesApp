import { Component, createPlatform, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product.interface';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styles: ``
})
export class ProductPageComponent implements OnInit {

  public product!: Product;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    let id: string = '';
    this.activatedRoute.params.pipe(
      tap( params => { id = params['id'].toString()})
    ).subscribe();
    const response = this.productService.getProductById(id);
    if(!response)
      this.router.navigate( ['products/list'] );
    this.product = response;
  }


}
