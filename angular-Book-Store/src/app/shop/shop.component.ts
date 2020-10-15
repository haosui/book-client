import { Component, OnInit } from '@angular/core';
import { HighBookList, ChildrentBookList, EnglishBookList, NovelBookList, SkillBookList} from '../book/Book-Mock';
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
  constructor() { }

  ngOnInit(): void {
  }

}
