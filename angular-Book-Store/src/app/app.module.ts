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

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import {CheckboxModule} from 'primeng/checkbox';
import {RadioButtonModule} from 'primeng/radiobutton'
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import {TabViewModule} from 'primeng/tabview';
import {PasswordModule} from 'primeng/password';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import {CalendarModule} from 'primeng/calendar';
import {InputNumberModule} from 'primeng/inputnumber';
import {DropdownModule} from 'primeng/dropdown';
import {DialogModule} from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent,
    CheckoutComponent
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
    ReactiveFormsModule
  ],
  providers: [BrowserAnimationsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
