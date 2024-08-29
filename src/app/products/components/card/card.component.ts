import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'shared-card',
  templateUrl: './card.component.html',
  styles: ``
})
export class CardComponent {

  @Input()
  public product!: Product;
}
