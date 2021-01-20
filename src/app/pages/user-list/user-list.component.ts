import { Component, OnInit } from '@angular/core';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { User } from 'src/app/shared/user.model';
import { UserService } from './user.service';

const STATE_KEY_USERS = makeStateKey('users');

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public users: User[];

  constructor(private readonly userService: UserService, private state: TransferState) { }



  ngOnInit(): void {


    this.users = this.state.get(STATE_KEY_USERS, [] as any);

    if (this.users.length === 0) {
      this.userService.getUsers().subscribe( resp => {
        this.users = resp;
        this.state.set(STATE_KEY_USERS, resp);
      });
    }

  }

}
