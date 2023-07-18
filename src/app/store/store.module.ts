import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HomePageComponent } from './pages/home-page/home-page.component';
import { MaterialModule } from './material/material.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductAlertComponent } from './components/product-alert/product-alert.component';
import { StoreHeaderComponent } from './components/store-header/store-header.component';



@NgModule({
  declarations: [
    HomePageComponent,
    ProductListComponent,
    ProductAlertComponent,
    StoreHeaderComponent,

  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    HomePageComponent,

  ]
})
export class StoreModule { }
