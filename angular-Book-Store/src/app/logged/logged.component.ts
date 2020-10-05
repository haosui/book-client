import { Component, OnInit } from '@angular/core';
import { User } from '../_models';
import { AccountService } from '../_services';
import { CommonService } from '../_services/common.service';
@Component({
  selector: 'app-logged',
  templateUrl: './logged.component.html',
  styleUrls: ['./logged.component.css']
})
export class LoggedComponent implements OnInit {

  user: User;
  logged = false;
  constructor(private accountService: AccountService,
              private common: CommonService
    ) {
      this.user = this.accountService.userValue;
      this.logged = this.common.logged
  }

  ngOnInit(): void {
  }
  logout() {
    this.accountService.logout();
}

}
