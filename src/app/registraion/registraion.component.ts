import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registraion',
  templateUrl: './registraion.component.html',
  styleUrls: ['./registraion.component.css']
})
export class RegistraionComponent {
  hide = true;


  constructor(private employeeService: EmployeeService,private toastr: ToastrService){}

  // public onAddEmployee(addForm: NgForm):void{
  //   document.getElementById('add-employee-form')?.click();
  //   this.toastr.success('Registration successful', 'Success', {
  //     positionClass: 'toast-top-center'
  //   });
  // }

  public onAddEmployee(addForm: NgForm):void{
    document.getElementById('add-employee-form')?.click();
    this.employeeService.addEmployeein(addForm.value).subscribe(
      { next : (response:Employee)=>
        { this.toastr.success('Registration successful', 'Success', {
           positionClass: 'toast-top-center'})},
        error :(error:HttpErrorResponse)=>{ console.log(error.message),this.toastr.
          error('Registration failed', 'Failed', {
          positionClass: 'toast-top-center'})},
       complete:()=>addForm.reset()});}
}
