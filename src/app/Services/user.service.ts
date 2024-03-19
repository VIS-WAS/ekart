import { Injectable } from '@angular/core';
import { User } from '../Model/User';
import { LoggerService } from './logger.service';

@Injectable()
export class UserService {
  users: User[] = [
    new User('Steve Smith', 'Male', 'Monthly', 'Active'),
    new User('Mery Jane', 'Female', 'Yearly', 'Inactive'),
    new User('Mark Tayler', 'Male', 'Quaterly', 'Active'),
  ];

  constructor(private logger: LoggerService) {}
  GetAllUsers() {
    return this.users;
  }
  CreateUser(name: string, gender: string, subType: string, status: string) {
    let user = new User(name, gender, subType, status);
    this.users.push(user);

    //---------// explicitely creating instance of Logger service class(tightly coupled)//---------//

    // let logger = new LoggerService();
    //

    //---------// explicitely creating instance of Logger service class(tightly coupled)//---------//

    this.logger.LogMessage(name, status);
  }
}
