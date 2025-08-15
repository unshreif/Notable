import { Routes } from '@angular/router';
import { HomeComponent } from './pages/Home/Home.component';
import { LatestComponent } from './pages/latest/latest.component';
import { AboutComponent } from './pages/About/About.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'latest', component: LatestComponent },
  { path: 'About', component: AboutComponent },
  { path: '**', redirectTo: '' },
];
