import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThingsRoutingModule } from './things-routing.module';
import { ThingsComponent } from './things.component';


@NgModule({
  declarations: [ThingsComponent],
  imports: [
    CommonModule,
    ThingsRoutingModule
  ]
})
export class ThingsModule { }
