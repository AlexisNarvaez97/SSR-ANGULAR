import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/shared/user.model';
import { UserService } from '../user-list/user.service';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.scss']
})
export class UserInformationComponent implements OnInit {

  public user: User;

  constructor(private readonly router: ActivatedRoute, private userService: UserService, private meta: Meta, private title: Title) { }

  ngOnInit(): void {

    this.router.paramMap.subscribe( e => {
      const id = e.get('id') as string;
      this.getCurrentUser(id);
    });

  }

  getCurrentUser(id: string): void {
    this.userService.getUser(id).subscribe(resp => {
      this.user = resp;
      this.meta.addTag({ name: 'og:title', content: this.user.firstName });
      this.title.setTitle(this.user.firstName);
    });
  }

}
