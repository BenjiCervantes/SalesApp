import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ListPageComponent } from './pages/list-page/list-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ProductsRoutingModule } from './products-routing.module';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { SearchControlComponent } from './components/search-control/search-control.component';
import { RightMenuComponent } from './components/right-menu/right-menu.component';
import { SharedModule } from "../shared/shared.module";
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    CardComponent,
    LayoutPageComponent,
    ListPageComponent,
    ProductPageComponent,
    RightMenuComponent,
    SearchControlComponent,
    SearchPageComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    RouterModule
]
})
export class ProductsModule { }
