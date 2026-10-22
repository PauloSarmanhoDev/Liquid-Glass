import { Routes } from '@angular/router';
import { Showcase } from './showcase/showcase';
import { Wiki } from './wiki/wiki';
import { Playground } from './playground/playground';

export const routes: Routes = [
  { path: '', redirectTo: 'showcase', pathMatch: 'full' },
  { path: 'showcase', component: Showcase, title: 'Showcase • Apple Liquid Glass' },
  { path: 'wiki', component: Wiki, title: 'Wiki & Docs • Apple Liquid Glass' },
  { path: 'playground', component: Playground, title: 'Playground Studio • Apple Liquid Glass' },
  { path: '**', redirectTo: 'showcase' },
];
