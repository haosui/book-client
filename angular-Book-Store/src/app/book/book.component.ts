import { Component, OnInit , Output, EventEmitter, Inject, Injectable} from '@angular/core';
import { HighBookList, NewBookList, ReBookList, ChildrentBookList, EnglishBookList, NovelBookList } from '../book/Book-Mock';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';

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

  constructor() {
  }

  ngOnInit(): void {
  }


}
