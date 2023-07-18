import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'store-header',
  templateUrl: './store-header.component.html',
  styleUrls: ['./store-header.component.css']
})
export class StoreHeaderComponent {

  public  title: string = 'tienda';

  //emito un click a mi componente padre, para cambiar la cariable "status".
  @Output()
  public seeItems = new EventEmitter<Function>();

  //traigo de mi componente padre, el valor de status.
  @Input()
  public status: boolean = false;

  //cambia de estado mi variable "status".
  changeStatus(){
    this.seeItems.emit();
  }



}
