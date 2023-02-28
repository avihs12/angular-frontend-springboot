import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from '../users/users.service';
import { Router } from '@angular/router';
import { UserAuthService } from '../users/userserviceauth';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']  
})
export class LoginComponent implements OnInit{
  hide = true;


  constructor(private userService: UsersService,private router: Router,
    private userAuthSer:UserAuthService,private toastr: ToastrService){}
  ngOnInit():void{}

  login(loginForm : NgForm){
  
  this.userService.login(loginForm.value).subscribe(
  {next : (response:any)=>{
    this.userAuthSer.setRole(response.user.role),
    this.userAuthSer.setToken(response.jwtToken),
    this.userAuthSer.setFirstname(response.user.firstname),
    this.userAuthSer.setLastname(response.user.lastname),
    this.router.navigate(["/main"])},
  });
  }
}



