import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './book/book.component';

import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ShopComponent } from './shop/shop.component';
import { AboutUsComponent } from './about-us/about-us.component';
const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'book', component: BookComponent},
  {path: 'cart', component: CartComponent},
  {path: 'checkout', component: CheckoutComponent },
  {path: 'shop', component: ShopComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
