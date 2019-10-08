import { Routes } from '@angular/router';
import { HomeComponent } from '../views/home/home.component';
import { AboutComponent } from '../views/about/about.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];