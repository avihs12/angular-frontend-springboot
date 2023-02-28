import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { UserAuthService } from '../users/userserviceauth';

@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.css']
})
export class ViewdetailsComponent implements OnInit{
  public employee: Employee[];

  public employeename : string | any;
  public employees : string | any;
  public employeelastname : string |any;


 
  constructor (private employeeService: EmployeeService,private userAuthSer: UserAuthService,private router: Router){}
    ngOnInit(){
      this.isLoggedIn();
    }
  
    
  public isLoggedIn(){
    this.employeename=this.userAuthSer.getFirstname();
      this.employeelastname=this.userAuthSer.getLastname();
    console.log("fghj"+ this.userAuthSer.getFirstname());
    return this.userAuthSer.isLoggedIn();
  }


  // public getEmployees():void{
  //   this.employeeService.getEmployees().subscribe(
  //   { next : (response: Employee[]) => {this.employee=response,console.log(response.values)},
  //     error : (error:HttpErrorResponse)=> alert("error got in get employees"+error.message),
  //     complete:() => console.log("heello")
  //   });
  // }
}
