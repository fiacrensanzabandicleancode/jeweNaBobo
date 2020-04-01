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
    payedDebtsAmount: null,
    payedDebtHistory: null
  }

  isNameAndPasswordValid = true

  userExists = false

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  goToUserInformation() {
    console.log("Typed user: ", this.user)
    this.userService.verifyIfUserExists(this.user).subscribe({
      next: result => this.userExists = result,
      error: error => console.log("Error: ", error)
    })
    
    if (this.userExists) {
      // TODO: Send a token instead of a userName. 
      // This token is used to get informations from the back system
      console.log("User exists")
      this.router.navigate(['userInformation', this.user.name])
    } else {
      console.log("User doesn't exist")
      this.isNameAndPasswordValid = false
    }
  }

}
