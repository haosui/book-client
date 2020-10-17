import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './book/book.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';

import { ReceInfoComponent} from './rece-info/rece-info.component';
import{BookDetailComponent} from'./book/book-detail/book-detail.component';
import { AuthGuard } from './_helpers';

import { ShopComponent } from './shop/shop.component';
import { AboutUsComponent } from './about-us/about-us.component';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./users/users.module').then(x => x.UsersModule);
const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'book', component: BookComponent, canActivate: [AuthGuard] },
  {path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
  {path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuard] },
  {path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
  {path: 'account', loadChildren: accountModule },
  {path: 'cart/info', component: ReceInfoComponent, canActivate: [AuthGuard] },
  {path: 'bookdetail', component: BookDetailComponent },


  {path: 'shop', component: ShopComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
