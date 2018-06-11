import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';

import { ReposComponent } from '../repos/repos.component';
import { LandingComponent } from '../landing/landing.component';

const routes:Routes=[
  {path:"repos",component:ReposComponent},
  {path:"landing",component:LandingComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class RoutingModule { }
