import { Component, OnInit , Output, EventEmitter, Inject, Injectable} from '@angular/core';
import { HighBookList, NewBookList, ReBookList, ChildrentBookList, EnglishBookList, NovelBookList } from '../book/Book-Mock';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { CartBook } from 'src/app/cart/cartBook';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
@Injectable()
export class BookComponent implements OnInit {
  hbooks = HighBookList;
  nbooks = NewBookList;
  rbooks = ReBookList;
  cbooks = ChildrentBookList;
  ebooks = EnglishBookList;
  novbooks = NovelBookList;
  bookQuantity = 1;
  
 cbook: any;
 book = {
  Id: 0,
PathImage: "",
Price: 0,
Title: "",
AuthorName: "",
Description: "",
numberOrder: 0,
PriceBeforsale: 0,
PriceAfterSale: 0

 };
  constructor( private router: Router) {
    this.bookQuantity = 1;
  }

  ngOnInit(): void {
    let Ob: Array<CartBook> = JSON.parse(localStorage.getItem('da'));
   
    this.cbook = Ob;
    this.getBook();
  }
  add()
  {
    this.bookQuantity += 1;
    console.log(this.bookQuantity);
  }
  minus()
  {
    if(this.bookQuantity >= 1)
   { this.bookQuantity-=1;}
  }
  getBook()
  {
    this.book  = JSON.parse(localStorage.getItem('bookselect'));
  }
  addtocart()
  {
    var flag = true;
    for (let i = 0; i < this.cbook.length; i++) {
      if (this.book.Id=== this.cbook[i].Id) {
       this.cbook[i].numberOrder +=this.bookQuantity;
       flag = false;
      }
    }
    if(flag)
    {
      var cartbook: CartBook ={
          Id: this.book.Id,
          Title: this.book.Title,
          Price: this.book.PriceAfterSale,
          PathImage: this.book.PathImage,
          numberOrder: this.bookQuantity
      };
      this.cbook.push( cartbook);
    }
    localStorage.setItem('da', JSON.stringify(this.cbook));
    
   
  }
  muangay()
  {
      this.addtocart();
       this.router.navigate(['/cart']);

  }

}
