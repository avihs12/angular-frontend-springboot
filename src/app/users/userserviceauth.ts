import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }

  public setRole(role:string){
    localStorage.setItem("role",role);
  }

  public setFirstname(firstname:string){
    localStorage.setItem("firstname",firstname);
  }
  
  public getFirstname(): any{
    return localStorage.getItem("firstname");
  }

  public getRole(): any{
    return localStorage.getItem("role");
  }

  public setToken(jwtToken:string){
    localStorage.setItem("jwtToken",jwtToken);
  }

  public getToken() : any{
    return localStorage.getItem("jwtToken");
  }

  public clear(){
    localStorage.clear();
  }

  public isLoggedIn(){
    return this.getRole() && this.getToken();
  }

  public setLastname(lastname:string){
    localStorage.setItem("lastname",lastname);
  }
  
  public getLastname(): any{
    return localStorage.getItem("lastname");
  }

}
