import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BottomNavComponent } from './components/bottom-nav/bottom-nav/bottom-nav.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home | Fugue' },
    children: [
      {
        path: 'cover',
        component: BottomNavComponent,
      },
      {
        path: 'definition',
        component: BottomNavComponent,
      },
      {
        path: 'dedication',
        component: BottomNavComponent,
      },
      {
        path: 'author',
        component: BottomNavComponent,
      },
      {
        path: 'app',
        component: BottomNavComponent,
      },
    ],
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { title: 'About | Fugue' },
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    data: { title: '404 | Fugue' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
