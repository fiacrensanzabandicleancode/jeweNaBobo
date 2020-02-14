import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent implements OnInit {

  constructor( private activatedRoute: ActivatedRoute, private userService: UserService ) { }

  userName = ""
  user = null
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => { 
      this.userName = params.get('name')
      console.log(this.userName)
      this.user = this.userService.getUserByName(this.userName)
      console.log(this.user)
  });
  }



}
