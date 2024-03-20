import { Component, OnInit, inject } from '@angular/core';
import { User } from 'src/app/Model/User';
import { UserService } from 'src/app/Services/user.service';
import { USER_TOKEN } from 'src/app/app.module';

@Component({
  selector: 'user-detail',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  selectedUser: User;
  userService = inject(USER_TOKEN);
  ngOnInit() {
    this.userService.OnUserDetailsClicked.subscribe((data: User) => {
      this.selectedUser = data;
    });
  }
}
