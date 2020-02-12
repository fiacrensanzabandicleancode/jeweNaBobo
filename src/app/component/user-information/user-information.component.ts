import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent implements OnInit {

  // inject the service. get the user using the Id. And print users info.
  constructor() { }

  ngOnInit() {
  }

}
