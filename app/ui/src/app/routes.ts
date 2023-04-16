import { Route } from '@angular/router';

import {
  AboutComponent,
  ContactComponent,
  HomeComponent,
  NotFoundComponent,
  PortfolioComponent,
  SkillsComponent,
} from '@@portfolio/web';

export const routes: Route[] = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact-us',
    component: ContactComponent,
  },
  {
    path: 'skills',
    component: SkillsComponent,
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
  },
  {
    path: '404',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '404',
  },
];
