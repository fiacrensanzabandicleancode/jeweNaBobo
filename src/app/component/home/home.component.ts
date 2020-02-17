import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: User = {
    name: '',
    password: '',
    debt: null,
    interest: null,
    payedDebtAmount: null,
    payedDebtHistory: null
  }

  validUsers = ['Butoyi', 'Nadia', 'Rehema']
  isNameAndPasswordValid = true

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  goToUserInformation() {
    if (this.userService.verifyIfUserExists(this.user)) {
      // TODO: Send a token instead of a userName. 
      // This token is used to get informations from the back system
      this.router.navigate(['userInformation', this.user.name])
    } else {
      this.isNameAndPasswordValid = false
    }
  }

}
