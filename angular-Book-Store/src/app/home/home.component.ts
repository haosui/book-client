import { Component, OnInit } from '@angular/core';
import { HighBookList, NewBookList } from '../book/Book-Mock';
import { from } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  hbooks = HighBookList;
  nbooks = NewBookList;

  constructor(
    ) { }
    ngOnInit(): void {
    }


}
