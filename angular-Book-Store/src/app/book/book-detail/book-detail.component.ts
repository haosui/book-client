import { Component, OnInit } from '@angular/core';
import { CartBook } from 'src/app/cart/cartBook';


@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
 numberr: number=  0;
 cbook: any;
 book: CartBook = {
  Id: 0,
PathImage: "",
Price: 0,
Title: "",
numberOrder: 0
 };

  constructor() { 
    this.numberr = 0;
  }

  ngOnInit(): void {
    let Ob: Array<CartBook> = JSON.parse(localStorage.getItem('da'));
    this.cbook = Ob;
    this.getBook();
  }
  add()
  {
    this.numberr += 1;
  }
  minus()
  {
    if(this.numberr >= 1)
   { this.numberr-=1;}
  }
  getBook()
  {
    this.book  =
    {
     Id: 2,
   PathImage: "../assets/images/Star-wars.jpg",
   Price: 10,
   Title: "Star wars",
   numberOrder: 1
    }
  }
  addtocart()
  {
    var flag = true;
    for (let i = 0; i < this.cbook.length; i++) {
      if (this.book.Id=== this.cbook[i].Id) {
       this.cbook[i].numberOrder +=1;
       flag = false;
      }
    }
    if(flag)
    {
      this.cbook.push( this.book);
    }
    localStorage.setItem('da', JSON.stringify(this.cbook));
   
  }
}
