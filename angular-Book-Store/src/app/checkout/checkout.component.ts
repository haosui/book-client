
import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { CartBook } from '../cart/cartBook';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cbook: any;
  total = 0;
  pay = 0;

  constructor(private router: Router) {
    let Ob: Array<CartBook> = JSON.parse(localStorage.getItem('da'));
    this.cbook = Ob;
  }

  ngOnInit(): void {
    this.getPrice(this.cbook);
  }

  getPrice(list): void {
    this.pay = 0;
    this.total = 0;
    for (const iterator of list) {
      this.total += iterator.Price * iterator.numberOrder;
    }
    this.pay = this.total;
    this.pay += 15;
  }


}


