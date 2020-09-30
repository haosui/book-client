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
    autoplay: true,
    autoplayTimeout:3000,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
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

  quotesOption: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout:6000,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
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
