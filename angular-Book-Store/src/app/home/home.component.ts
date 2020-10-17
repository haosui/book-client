import { Component, OnInit } from '@angular/core';
import { HighBookList, NewBookList } from '../book/Book-Mock';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { from } from 'rxjs';

import { Router } from '@angular/router';

import { User } from '../_models';
import { AccountService } from '../_services';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  hbooks = HighBookList;
  nbooks = NewBookList;
  user: User;
  

  constructor(private accountService: AccountService, private router: Router

    ) {
      this.user = this.accountService.userValue;



  }
  logout() {
    this.accountService.logout();
  }
  

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
 getbook1(item)
 {
  localStorage.setItem('bookselect',JSON.stringify(item));
  this.router.navigate(['/book']);

 }
getbook2(item)
 {
  localStorage.setItem('bookselect',JSON.stringify(item));
  this.router.navigate(['/book']);
 }
}
