import { Component, Inject } from '@angular/core';
import { User } from 'src/app/Model/User';
import { UserService } from 'src/app/Services/user.service';
import { USER_TOKEN } from 'src/app/app.module';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  constructor(@Inject(USER_TOKEN) private userService: UserService) {}

  userList = this.userService.GetAllUsers();

  ShowUserDetails(user: User) {
    this.userService.OnShowUserDetails(user);
  }
}
