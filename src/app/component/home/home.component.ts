import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: User = {
    name: '',
    password: ''
  }

  validUsers = ['Butoyi', 'Nadia', 'Rehema']
  isNameAndPasswordValid = true

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToUserInformation() {
    if (this.isUserValid(this.user)) {
      // TODO: go to userInfo with the Id.
      this.router.navigate(['userInformation'])
    }
  }

  isUserValid(user: User): boolean {
    if (this.validUsers.includes(user.name) && user.password === '123') {
      return true
    } else {
      this.isNameAndPasswordValid = false
      return false
    }
  }

}
