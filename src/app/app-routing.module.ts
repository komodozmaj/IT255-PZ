import { JsonPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarListPageComponent } from './pages/car-list-page/car-list-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { AuthGuardService } from './services/auth/auth-service.service';

const routes: Routes = [
{
  path:"register",
  component:RegisterPageComponent
 },
 {
   path:"login",
   component:LoginPageComponent
 },
 { 
   path:"home",
   component:HomePageComponent,
   canActivate: [AuthGuardService]
 },
 { 
  path:"carlist",
  component:CarListPageComponent,
  canActivate: [AuthGuardService]
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
