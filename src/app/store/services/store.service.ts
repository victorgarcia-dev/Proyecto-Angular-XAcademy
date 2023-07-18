import { Injectable } from '@angular/core';
import { Product } from '../types/product.type';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  public puductoList: Product[] = [{
    id: '1',
    nombre: 'azucar',
    costo: 450
  },{
    id: '2',
    nombre: 'yerba mate',
    costo: 899
  },{
    id: '3',
    nombre: 'termo',
    costo: 300
  },{
    id: '4',
    nombre: 'edulcorante',
    costo: 630
  },{
    id: '5',
    nombre: 'bombilla',
    costo: 2000
  }];

  constructor() { }
}
