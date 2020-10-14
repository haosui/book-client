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
import { ReceInfoComponent } from './rece-info/rece-info.component';
import { BookDetailComponent } from './book/book-detail/book-detail.component';

import { NzRateModule } from 'ng-zorro-antd/rate';



import { CheckoutComponent } from './checkout/checkout.component';
import { ShopComponent } from './shop/shop.component';
import { AboutUsComponent } from './about-us/about-us.component';

import { HttpClientModule } from '@angular/common/http';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

registerLocaleData(en);



@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    HomeComponent,
    CartComponent,
    CheckoutComponent,

    ReceInfoComponent,
    BookDetailComponent,

    ShopComponent,
    AboutUsComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    CarouselModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NzRateModule
  ],
  providers: [BrowserAnimationsModule, { provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
