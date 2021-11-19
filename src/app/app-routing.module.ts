import { AuthorComponent } from './home/components/author/author.component';
import { CoverComponent } from './home/components/cover/cover.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DefinitionComponent } from './home/components/definition/definition.component';
import { DedicationComponent } from './home/components/dedication/dedication.component';
import { AppPageComponent } from './home/components/app/app.component';
import { ChapterPageComponent } from './components/chapter-page/chapter-page.component';

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
        component: CoverComponent,
      },
      {
        path: 'definition',
        component: DefinitionComponent,
      },
      {
        path: 'dedication',
        component: DedicationComponent,
      },
      {
        path: 'author',
        component: AuthorComponent,
      },
      {
        path: 'app',
        component: AppPageComponent,
      },
    ],
  },
  {
    path: 'chapter/:chapterName/:chapterPage',
    component: ChapterPageComponent,
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
