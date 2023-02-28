import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  pathOfapi = "http://localhost:8080";    
  requestHeader = new HttpHeaders({"NO-Auth":"True"});

  constructor(private httpclient: HttpClient) { }

  public login(loginData: any ){
    return this.httpclient.post(this.pathOfapi+"/authenticate",loginData,{headers:this.requestHeader});
  } 
  
}
