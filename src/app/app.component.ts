import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Employee } from './employee';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from './users/users.service';
import { UserAuthService } from './users/userserviceauth';
// import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  color = "";
  
  onClick(){
    this.color
  }

  public employeename : string | any;
  public employees : string | any;
  constructor (private employeeService: EmployeeService,
    private userAuthSer: UserAuthService,
    private router: Router
    ){}
    ngOnInit(){
      // this.employeename=this.userAuthSer.getFirstname();
    }
    public isLoggedIn(){
      this.employeename=this.userAuthSer.getFirstname();
      return this.userAuthSer.isLoggedIn();
    }
    public LogOut(){
      this.userAuthSer.clear();
      this.router.navigate(["/login"]);
    }
    title = 'Ultimatixapp'; 
    toDisplay = true;
    toggleData(){  
      this.toDisplay = !this.toDisplay;
    }
}

//   displayedColumns: string[] = ['id', 'firstname', 'lastname', 'salary','edit','delete'];
//   public getEmployees(): void {
//     this.employeeService.getEmployees().subscribe(
//       (response: Employee[]) => {
//         this.employees = response;
//         console.log(this.employees);
//       },  
//       (error: HttpErrorResponse) => {
//         alert(error.message);
//       }
//     );
//   }

//   public onAddEmloyee(addForm: NgForm): void {
//     document.getElementById('add-employee-form')?.click();
//     this.employeeService.addEmployee(addForm.value).subscribe(
//       (response: Employee) => {
//         console.log(response);
//         this.getEmployees();
//         addForm.reset();  
//       },  
//       (error: HttpErrorResponse) => {
//         alert(error.message);
//         addForm.reset();
//       }
//     );
//   }

//   public onUpdateEmloyee(employee: Employee): void {
//     this.employeeService.updateEmployee(employee).subscribe(
//       (response: Employee) => {
//         console.log(response);
//         this.getEmployees();
//       },
//       (error: HttpErrorResponse) => {
//         alert(error.message);
//       }
//     );
//   }

//  public onDeleteEmloyee(employeeId: number): void {
//     this.employeeService.deleteEmployee(employeeId).subscribe(
//       (response: void) => {
//         console.log(response);
//         this.getEmployees();
//       },
//       (error: HttpErrorResponse) => {
//         alert(error.message);
//       }
//     );
//   }

// public searchEmployees(key: string): void {
//     console.log(key);
//     const results: Employee[] = [];
//     for (const employee of this.employees) {
//       if (employee.firstname.toLowerCase().indexOf(key.toLowerCase()) !== -1
//       || employee.lastname.toLowerCase().indexOf(key.toLowerCase()) !== -1
//       || employee.password.toLowerCase().indexOf(key.toLowerCase()) !== -1
//       || employee.username.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
//         results.push(employee);
//       }
//     }
//     this.employees = results;
//     if (results.length === 0 || !key) {
//       this.getEmployees();
//    }
// }

//   public onOpenModal(employee: Employee | any , mode: string): void {
//     const container = document.getElementById('main-container');
//     const button = document.createElement('button');
//     button.type = 'button';
//     button.style.display = 'none';
//     button.setAttribute('data-toggle', 'modal');

//     if (mode === 'add') {
//       button.setAttribute('data-target', '#addEmployeeModal');
//     }
//     if (mode === 'edit') {
//       this.editEmployee = employee;
//       button.setAttribute('data-target', '#updateEmployeeModal');
//     }
//     if (mode === 'delete') {
//       this.deleteEmployee = employee;
//       button.setAttribute('data-target', '#deleteEmployeeModal');
//     }
//     container?.appendChild(button);
//     button.click();
//   }

//   title = 'Ultimatixapp'; 
//   toDisplay = true;
//   toggleData() {  
//     this.toDisplay = !this.toDisplay;
//   }
// }

