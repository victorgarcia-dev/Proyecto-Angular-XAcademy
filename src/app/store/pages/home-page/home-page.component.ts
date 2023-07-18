import { Component } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { Product } from '../../types/product.type';


@Component({
  selector: 'store-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  //variable status.
  public status: boolean = false;

  //funcion cambia de valor mi status.
  seeItems(){
    if(this.status === false){
      this.status = true;
    } else {
      this.status = false;
    }
  }
}
