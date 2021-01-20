import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListRoutingModule } from './user-list-routing.module';
import { UserListComponent } from './user-list.component';
import { ShellRenderDirective } from './shell-render.directive';
import { ShellNoRenderDirective } from './shell-no-render.directive';


@NgModule({
  declarations: [UserListComponent, ShellRenderDirective, ShellNoRenderDirective],
  imports: [
    CommonModule,
    UserListRoutingModule
  ]
})
export class UserListModule { }
