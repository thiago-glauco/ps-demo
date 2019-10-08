import { Routes } from '@angular/router';
import { HomeComponent } from '../views/home/home.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];