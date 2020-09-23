import { Component, OnInit , Output, EventEmitter, Inject, Injectable} from '@angular/core';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
@Injectable()
export class BookComponent implements OnInit {

  CartBookList = [
    {Id: 1, Title: 'Star wars',  Price: 10, numberOrder: 1 , PathImage: '../assets/images/Star-wars.jpg'},
    {Id: 3, Title: 'Date A Live',  Price: 19, numberOrder: 1, PathImage: '../assets/images/datealive.jpg'},
];



  total = 0;

  constructor() {
   }

  ngOnInit(): void {

    if (localStorage.getItem('da')) {

    }

    else {

    localStorage.setItem('da', JSON.stringify(this.CartBookList));
    console.log(JSON.parse(localStorage.getItem('da')));
    }
  }


}
