import { Injectable } from '@angular/core';
import { Observable } from "rxjs/internal/Observable";
import { catchError, map, tap } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { IRegistration } from '../app.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  constructor(private http: HttpClient) { }
  SucessVal: any;
  public saveUser(model: IRegistration): Observable<any>{
   
    const requestBody = {
      json: {
        data: JSON.stringify(model)
      }
    };
    this.http.post(`${environment.devlopmentApi}/users`, requestBody).subscribe((res) => {
      this.SucessVal = <any>res;
    })
    return this.SucessVal;
  }
}
