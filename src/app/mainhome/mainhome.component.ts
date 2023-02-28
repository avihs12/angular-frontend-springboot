import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { UserAuthService } from '../users/userserviceauth';

@Component({
  selector: 'app-mainhome',
  templateUrl: './mainhome.component.html',
  styleUrls: ['./mainhome.component.css']
})
export class MainhomeComponent implements OnInit {

  value = '';
  p:any;

  public employee: Employee[];
  public editEmployee: Employee | any;
  public deleteEmployee: Employee | any;
  public employees : string | any;
  toastr: any;
  constructor (private employeeService: EmployeeService, private userAuthService: UserAuthService){}

  ngOnInit(): void {
    this.getEmployees();
    // this.employees=this.employeeService.getEmployees();
  }

  title = 'Ultimatixapp'; 
  toDisplay = true;
  toggleData() {  
    this.toDisplay = !this.toDisplay;
  }

  public isLoggedIn(){
    return this.userAuthService.isLoggedIn();
  }

  // displayedColumns: string[] = ['id', 'firstname', 'lastname', 'salary','edit','delete'];

  public getEmployees():void{
    this.employeeService.getEmployees().subscribe(
     { next : (response: Employee[]) => {this.employee=response,this.toastr.
      success('Registration successful', 'Success', {
      positionClass: 'toast-top-center'})},
      error : (error:HttpErrorResponse)=>{this.toastr.success('Registration successful', 'Success', {
        positionClass: 'toast-top-center'})},
      complete:() => console.log("heello")
    });
  }

  public onAddEmployee(addForm: NgForm):void{
    document.getElementById('add-employee-form')?.click();
    this.employeeService.addEmployee(addForm.value).subscribe(
      { next : (response:Employee)=> this.getEmployees(),
       error :(error:HttpErrorResponse)=>alert(error.message),
      complete:()=>addForm.reset()
  });
  }

  public onUpdateEmployee(employee: Employee):void{
    this.employeeService.updateEmployee(employee).subscribe(
      {next: (response:Employee)=>this.getEmployees(),
      error : (error:HttpErrorResponse)=>console.log(error.message),
      complete:()=>console.log("")
      });
  }

  public onDeleteEmployee(employeeId: number):void{
   
    this.employeeService.deleteEmployee(employeeId).subscribe(
     {next: (response:void)=> this.getEmployees(),
      error: (error:HttpErrorResponse)=>alert(error.message),
      complete:()=>console.log("")
  });
  }

  public searchEmployees(key:string):void{
    const result:Employee[]=[];
    console.log(key);
    for (const employee of this.employee){
      if (employee.firstname.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || employee.username.toLowerCase().indexOf(key.toLowerCase()) !== -1
      ||employee.lastname.toLowerCase().indexOf(key.toLowerCase()) !== -1
      ||employee.id.toString().indexOf(key) !== -1
      ) {
        result.push(employee);
      }
    }
    this.employee=result;
    if (result.length === 0 || !key){
      this.getEmployees();
    } 
  }


public onOpenModal(employee:Employee | any, mode:any):void{
  const container = document.getElementById('main-container');
  const button = document.createElement('button');
  button.type='button';
  button.style.display='none';
  button.setAttribute('data-toggle','modal');
  if(mode === 'add'){
    button.setAttribute('data-target','#addEmployeeModal');
  }
  if(mode === 'edit'){
    this.editEmployee=employee;
    button.setAttribute('data-target','#updateEmployeeModal');
  }
  if(mode === 'delete'){
    this.deleteEmployee=employee;
    button.setAttribute('data-target','#deleteEmployeeModal');
  }

container?.appendChild(button);
button.click();
}



}
