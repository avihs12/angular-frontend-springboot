import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { UserAuthService } from './users/userserviceauth';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiServerUrl = 'http://localhost:8080';
  
  head_obj = new HttpHeaders().set("Authorization",this.userAuthSer.getToken());

  constructor(private http: HttpClient , 
    private userAuthSer: UserAuthService){
 } 

 public getEmployees():Observable<Employee[]>{
  return this.http.get<Employee[]>(`${this.apiServerUrl}/employee`,{headers:this.head_obj});
}


public addEmployee(employee: Employee): Observable<Employee> {
  return this.http.post<Employee>(`${this.apiServerUrl}/addEmp`, employee);
}

public addEmployeein(employee: Employee): Observable<Employee> {
  return this.http.post<Employee>(`${this.apiServerUrl}/addEmp`, employee);
}


public updateEmployee(employee: Employee): Observable<Employee> {
  return this.http.put<Employee>(`${this.apiServerUrl}/editEmp`, employee,{headers:this.head_obj});
}

public deleteEmployee(Id: number): Observable<void> {
  return this.http.delete<void>(`${this.apiServerUrl}/delEmp/${Id}`,{headers:this.head_obj});
}

findByTitle(title: any): Observable<Employee[]> {
  return this.http.get<Employee[]>(`${this.apiServerUrl}?title=${title}`);
}
getAll(params: any): Observable<any> {
  return this.http.get<any>(this.apiServerUrl, { params });
}
get(id: any): Observable<Employee> {
  return this.http.get<Employee>(`${this.apiServerUrl}/${id}`);
}
}


  //   public getEmployees() : Observable<Employee[]>{
  //       return this.http.get<Employee[]>(`${this.apiServerUrl}/listEmployees`,{headers:this.head_obj});
  //   }

  // public addEmployee(employee : Employee) : Observable<Employee>{
  //     return this.http.post<Employee>(`${this.apiServerUrl}/save`, employee,{headers:this.head_obj});
  // }

  // public updateEmployee(employee : Employee) : Observable<Employee>{
  //     return this.http.put<Employee>(`${this.apiServerUrl}/update`,employee,{headers:this.head_obj});
  // }

  // public deleteEmployee(id : number) : Observable<void>{
  //     return this.http.delete<void>(`${this.apiServerUrl}/delete/${id}`,{headers:this.head_obj});
  // }

// }
