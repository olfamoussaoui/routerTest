import { CustomerformComponent } from './../customerform/customerform.component';
import { HomeComponent } from './../home/home.component';
import { Routes } from '@angular/router';


export const routes: Routes = [
  { path: 'home',       component: HomeComponent },
  { path: 'create',     component: CustomerformComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
