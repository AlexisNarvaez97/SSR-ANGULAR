import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserInformationRoutingModule } from './user-information-routing.module';
import { UserInformationComponent } from './user-information.component';


@NgModule({
  declarations: [UserInformationComponent],
  imports: [
    CommonModule,
    UserInformationRoutingModule
  ]
})
export class UserInformationModule { }
