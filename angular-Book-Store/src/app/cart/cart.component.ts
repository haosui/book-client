import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { CartBook } from '../cart/cartBook';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

@Injectable()
export class CartComponent implements OnInit {


  cbook: any;
  total = 0;

  constructor(private router: Router) {
    let Ob: Array<CartBook> = JSON.parse(localStorage.getItem('da'));
    this.cbook = Ob;
  }

  ngOnInit(): void {
    this.getPrice(this.cbook);
  }

  getPrice(list): void {
    this.total = 0;
    for (const iterator of list) {
      this.total += iterator.Price * iterator.numberOrder;
    }
  }

  remove(Id: number): void {
    for (let i = 0; i < this.cbook.length; i++) {
      if (Id === this.cbook[i].Id) {
        this.cbook.splice(i, 1);
      }
    }
    localStorage.setItem('da', JSON.stringify(this.cbook));
    this.getPrice(this.cbook);
  }

}
