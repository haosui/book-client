import { Component, OnInit , Output, EventEmitter, Inject, Injectable} from '@angular/core';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
@Injectable()
export class BookComponent implements OnInit {



  constructor() {
   }

  ngOnInit(): void {
  }


}
