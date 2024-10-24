import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
// inject http api to service auth bcoz of api call we use observabl<any>
  constructor(private _httpclient:HttpClient) { }
  doLogin(playload:any):Observable<any>{
    return this._httpclient.post("https://reqres.in/api/login",playload);
  }
}
