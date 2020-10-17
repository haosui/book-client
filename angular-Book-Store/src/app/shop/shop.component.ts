import { Component, OnInit } from '@angular/core';
import { HighBookList, NewBookList, ReBookList, ChildrentBookList, EnglishBookList, NovelBookList } from '../book/Book-Mock';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  hbooks = HighBookList;
  nbooks = NewBookList;
  rbooks = ReBookList;
  cbooks = ChildrentBookList;
  ebooks = EnglishBookList;
  novbooks = NovelBookList;
  constructor() { }

  ngOnInit(): void {
  }

  getbook(item)
  {
    
    localStorage.setItem('bookselect',JSON.stringify(item));
  }
}
