import { Component, Input } from '@angular/core';

@Component({
  selector: 'store-product-alert',
  templateUrl: './product-alert.component.html',
  styleUrls: ['./product-alert.component.css']
})
export class ProductAlertComponent {
  public titleProducts: string = 'lista de productos';
  public titleNoProducts: string = 'no hay productos';

  @Input()
  public status: boolean = false;
}
