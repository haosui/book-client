
import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { CartBook } from '../cart/cartBook';
import { CusInfo } from '../rece-info/customerinfo';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cbook: any;
  total = 0;
  pay = 0;
  isOrder: boolean;
  thongtinnhan: Array<CusInfo>= [];

  constructor(private router: Router) {
    let Ob: Array<CartBook> = JSON.parse(localStorage.getItem('da'));
    this.cbook = Ob;
    let OB2: Array<CusInfo> = JSON.parse(localStorage.getItem('thongtinkhach'));
    this.thongtinnhan = OB2;
  }

  ngOnInit(): void {
    this.getPrice(this.cbook);
  }
  selectt(info)
  {
    console.log(info);
  }
  creat()
  {
    this.router.navigate(['cart/info']);
  }
  getPrice(list): void {
    this.pay = 0;
    this.total = 0;
    for (const iterator of list) {
      this.total += iterator.Price * iterator.numberOrder;
    }
    this.pay = this.total + 15;
    if (this.total > 0) {
      this.isOrder = true;
    }
    else {
      this.isOrder = false;
    }
  }


}


