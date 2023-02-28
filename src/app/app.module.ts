import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { SideContainerComponent } from './side-container/side-container.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
import {MatToolbarModule} from '@angular/material/toolbar';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule   } from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import {MatInputModule} from '@angular/material/input';
import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { MatTableModule } from '@angular/material/table';
import { MainhomeComponent } from './mainhome/mainhome.component';
import { UltimatixhomeComponent } from './ultimatixhome/ultimatixhome.component';
import { RegistraionComponent } from './registraion/registraion.component'; 
import {ReactiveFormsModule} from  '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SideContainerComponent,
    TopNavComponent,
    DashboardComponent,
    MainhomeComponent,
    UltimatixhomeComponent,
    RegistraionComponent,
    ViewdetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    HttpClientModule,
    MatInputModule,
    MatTableModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSelectModule,
    ToastrModule.forRoot(),
    MatGridListModule,
    NgxPaginationModule
    
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent],
})
export class AppModule  {}

