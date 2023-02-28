import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MainhomeComponent } from './mainhome/mainhome.component';
import { RegistraionComponent } from './registraion/registraion.component';
import { UltimatixhomeComponent } from './ultimatixhome/ultimatixhome.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'main', component:MainhomeComponent},
  { path: 'ultimatixhome', component:UltimatixhomeComponent},
  { path: 'registration', component:RegistraionComponent},
  { path: 'viewdetails', component:ViewdetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
