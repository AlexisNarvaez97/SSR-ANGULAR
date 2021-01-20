import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'user-list',
    pathMatch: 'full',
  },
  {
    path: 'user-list',
    loadChildren: () =>
      import('./pages/user-list/user-list.module').then(
        (m) => m.UserListModule
      ),
  },
  {
    path: 'user-list/:id',
    loadChildren: () =>
      import('./pages/user-information/user-information.module').then(
        (m) => m.UserInformationModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
