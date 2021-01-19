import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public users: User[];

  constructor(private readonly userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe( resp => {
      this.users = resp;
      console.log(resp);
    });
  }

}
