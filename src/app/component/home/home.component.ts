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
    passWord: ''
  }

  validUsers = ['Butoyi', 'Nadia', 'Rehema'];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToUserInformation() {
    if (this.isUserValid(this.user)) {
      this.router.navigate(['userInformation'])
    }
  }

  isUserValid(user: User): boolean {
    if (this.validUsers.includes(user.name) && user.passWord === '123') {
      return true
    } else {
      return false
    }
  }

}
