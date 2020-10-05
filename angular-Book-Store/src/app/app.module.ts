import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { HomeComponent } from './home/home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';


import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';


import {CheckboxModule} from 'primeng/checkbox';
import {RadioButtonModule} from 'primeng/radiobutton'
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import {TabViewModule} from 'primeng/tabview';
import {PasswordModule} from 'primeng/password';
import {BreadcrumbModule } from 'primeng/breadcrumb';
import {CalendarModule} from 'primeng/calendar';
import {InputNumberModule} from 'primeng/inputnumber';
import {DropdownModule} from 'primeng/dropdown';
import {DialogModule} from 'primeng/dialog';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';


import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { JwtInterceptor, ErrorInterceptor } from './_helpers';

import { AlertComponent } from './_components';
import { LoggedComponent } from './logged/logged.component';



@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    HomeComponent,
    CartComponent,
    CheckoutComponent,
    AlertComponent,
    LoggedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CheckboxModule,
    RadioButtonModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
    TabViewModule,
    PasswordModule,
    BreadcrumbModule,
    CalendarModule,
    InputNumberModule,
    DropdownModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    BrowserModule,
    HttpClientModule

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider,
    BrowserAnimationsModule
],
  bootstrap: [AppComponent]
})
export class AppModule { }
