import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { HighBookList, NewBookList} from './book/Book-Mock';
import {CartBook} from './cart/cartBook';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  CartBookList = [
    {Id: 1, Title: 'Star wars',  Price: 10, numberOrder: 1 , PathImage: '../assets/images/Star-wars.jpg'},
    {Id: 3, Title: 'Date A Live',  Price: 19, numberOrder: 1, PathImage: '../assets/images/datealive.jpg'},
];
  title = 'Book-Store';
  totalOrder;

  ngOnInit(): void {
    if (localStorage.getItem('da')) {
      let x: Array<CartBook> = JSON.parse(localStorage.getItem('da'));
      this.totalOrder = x.length;
    }
    else {
    localStorage.setItem('da', JSON.stringify(this.CartBookList));
    this.totalOrder = this.CartBookList.length;
    }
  }

}
