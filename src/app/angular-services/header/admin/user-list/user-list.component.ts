import { Component } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],

  // -----//this will create separate instance - problem with dependency override

  // providers: [UserService],

  // -----//this will create separate instance - problem with dependency over ride
})
export class UserListComponent {
  constructor(private userService: UserService) {}

  userList = this.userService.GetAllUsers();
}
