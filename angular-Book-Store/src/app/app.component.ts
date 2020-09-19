import { Component } from '@angular/core';
import { HighBookList, NewBookList} from './book/Book-Mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Book-Store';
  hbooks = HighBookList;
  nbooks = NewBookList;
}
