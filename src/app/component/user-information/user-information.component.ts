import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent implements OnInit {

  constructor( private activatedRoute: ActivatedRoute, private userService: UserService ) { }

  user: User = {
    "name": '',
    "password": "",
    "debt": null,
    "interest": null,
    "payedDebtsAmount": null,
    "payedDebtHistory": null
  }

  userName = ""
  
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => { 
      this.userName = params.get('name')
      this.user.name = this.userName
      console.log("Attempt to connect: ", this.user)
      this.userService.getUserByName(this.user).subscribe({
        next: result => this.user = result,
        error: error => console.log("Error: ", error)
      })
  });
  }



}
