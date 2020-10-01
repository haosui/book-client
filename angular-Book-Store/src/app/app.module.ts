import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { HomeComponent } from './home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ReceInfoComponent } from './rece-info/rece-info.component';



@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    HomeComponent,
    CartComponent,
    CheckoutComponent,
    ReceInfoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    CarouselModule,
    BrowserAnimationsModule
  ],
  providers: [BrowserAnimationsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
