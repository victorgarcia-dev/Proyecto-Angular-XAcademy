import { Component, Input } from '@angular/core';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'store-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  //traigo mis productos.
  constructor(private storeService : StoreService){}

  //table.
  displayedColumns: string[] = ['id','nombre', 'costo'];
  dataSource = this.storeService.puductoList;


}
