import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [
    {"name": 'Nadia', "password": "123"},
    {"name": 'Rehema', "password": "123"},
    {"name": 'Butoyi', "password": "123"}
  ]

  constructor() { }

  getUsersInformation() {
    return this.users
  }
}
