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
    data: { title: 'User List' },
  },
  {
    path: 'user-list/:id',
    loadChildren: () =>
      import('./pages/user-information/user-information.module').then(
        (m) => m.UserInformationModule
      ),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./pages/about/about.module').then((m) => m.AboutModule),
    data: { title: 'About' },
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./pages/contact/contact.module').then((m) => m.ContactModule),
    data: { title: 'Contact' },
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
    data: { title: 'Home' },
  },
  {
    path: 'places',
    loadChildren: () =>
      import('./pages/places/places.module').then((m) => m.PlacesModule),
    data: { title: 'Places' },
  },
  {
    path: 'things',
    loadChildren: () =>
      import('./pages/things/things.module').then((m) => m.ThingsModule),
    data: { title: 'Things' },
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
