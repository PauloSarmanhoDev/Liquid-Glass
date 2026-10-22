import { Routes } from '@angular/router';
import { Showcase } from './showcase/showcase';
import { Wiki } from './wiki/wiki';

export const routes: Routes = [
  { path: '', redirectTo: 'showcase', pathMatch: 'full' },
  { path: 'showcase', component: Showcase, title: 'Showcase • Apple Liquid Glass' },
  { path: 'wiki', component: Wiki, title: 'Wiki & Docs • Apple Liquid Glass' },
  { path: '**', redirectTo: 'showcase' },
];

