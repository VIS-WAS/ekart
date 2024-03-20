import { Component, Inject } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { USER_TOKEN } from 'src/app/app.module';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],

  // -----//this will create separate instance - problem with dependency override

  // providers: [UserService],

  // -----//this will create separate instance - problem with dependency override
})
export class UserListComponent {
  constructor(@Inject(USER_TOKEN) private userService: UserService) {}

  userList = this.userService.GetAllUsers();
}
