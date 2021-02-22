import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersComponent } from './shopping/orders/orders.component';
import { ProductsComponent } from './shopping/products/products.component';
import { CartComponent } from './shopping/cart/cart.component';
import {ShoppingService} from "./shopping/services/shopping.service";

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    ProductsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
