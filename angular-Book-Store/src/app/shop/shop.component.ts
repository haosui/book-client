import { Component, OnInit } from '@angular/core';
import { HighBookList, NewBookList, ReBookList, ChildrentBookList, EnglishBookList, NovelBookList,SkillBookList } from '../book/Book-Mock';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  hbooks = HighBookList;
  cbooks = ChildrentBookList;
  ebooks = EnglishBookList;
  novbooks = NovelBookList;
  skbooks = SkillBookList;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  getbook(item)
  {
    
    localStorage.setItem('bookselect',JSON.stringify(item));
  }
  hi(item)
  {
    localStorage.setItem('bookselect',JSON.stringify(item));
    this.router.navigate(['/book']);
  }
}
