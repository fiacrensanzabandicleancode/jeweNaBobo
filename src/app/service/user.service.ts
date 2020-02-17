import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { element } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // TODO: Données à externaliser. 
  // soit dans une DB, 
  // soit un simple json sur le serveur. 
  // Si c'est dans un json sur le serveur, voir s'il y a moyen dans github
  // Sinon voir s'il y a moyen dans un autre serveur
  users: User[] = [
    {
      "name": 'test',
      "password": "123",
      "debt": 200000,
      "interest": 0,
      "payedDebtAmount": 30000,
      "payedDebtHistory":
        [
          {
            "userName": 'Butoyi',
            "amount": 10000,
            "paymentDate": new Date("2020-02-14")
          },
          {
            "userName": 'test',
            "amount": 10000,
            "paymentDate": new Date("2020-03-14")
          },
          {
            "userName": 'test',
            "amount": 10000,
            "paymentDate": new Date("2020-04-14")
          }
        ]
    },
    {
      "name": 'Butoyi',
      "password": "123",
      "debt": 200000,
      "interest": 0,
      "payedDebtAmount": 30000,
      "payedDebtHistory":
        [
          {
            "userName": 'Butoyi',
            "amount": 10000,
            "paymentDate": new Date("2020-02-14")
          },
          {
            "userName": 'Butoyi',
            "amount": 10000,
            "paymentDate": new Date("2020-03-14")
          },
          {
            "userName": 'Butoyi',
            "amount": 10000,
            "paymentDate": new Date("2020-04-14")
          }
        ]
    },
    {
      "name": 'Nadia',
      "password": "123",
      "debt": 200000,
      "interest": 0,
      "payedDebtAmount": 30000,
      "payedDebtHistory":
        [
          {
            "userName": 'Rehema',
            "amount": 5000,
            "paymentDate": new Date("2020-04-14")
          },
          {
            "userName": 'Rehema',
            "amount": 5000,
            "paymentDate": new Date("2020-04-14")
          },
          {
            "userName": 'Rehema',
            "amount": 5000,
            "paymentDate": new Date("2020-04-14")
          }
        ]
    },
    {
      "name": 'Rehema',
      "password": "123",
      "debt": 200000,
      "interest": 0,
      "payedDebtAmount": 30000,
      "payedDebtHistory":
        [
          {
            "userName": 'Rehema',
            "amount": 5000,
            "paymentDate": new Date("2020-04-14")
          },
          {
            "userName": 'Rehema',
            "amount": 5000,
            "paymentDate": new Date("2020-04-14")
          },
          {
            "userName": 'Rehema',
            "amount": 10000,
            "paymentDate": new Date("2020-04-14")
          },
          {
            "userName": 'Rehema',
            "amount": 2000,
            "paymentDate": new Date("2020-04-14")
          }
        ]
    }
  ]

  constructor() { }

  getUserByName(userName: string): User {
    var user = null
    for (let element of this.users) {
      if (element.name === userName) {
        user = element
        this.initializePayedDebtAmount(user)
      }
    }
    return user
  }

  /**
   * Verifies if the user exists in database.
   * @author fnsanzabandi
   */
  verifyIfUserExists(user: User) {
    var userExists = false;
    for (let element of this.users) {
      if (element.name === user.name && element.password === user.password) {
        userExists = true
        break
      }
    }
    return userExists
  }

  /**
    * Initializes the total payed debt amount.
    * @author fnsanzabandi
    */
  initializePayedDebtAmount(user: User) {
    user.payedDebtAmount = 0
    user.payedDebtHistory.forEach(element => {
      user.payedDebtAmount = user.payedDebtAmount + element.amount
    });
  }

}
