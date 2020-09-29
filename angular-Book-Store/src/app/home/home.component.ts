import { Component, OnInit } from '@angular/core';
import { HighBookList, NewBookList } from '../book/Book-Mock';
import { OwlOptions } from 'ngx-owl-carousel-o';
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
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      640: {
        items: 1
      },
      740: {
        items: 1
      }
    },
    nav: false
  }

}
