import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../models/login';
import { Token } from '../models/token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
// inject http api to service auth bcoz of api call we use observabl<any>
  constructor(private _httpclient:HttpClient) { }
  doLogin(playload:Login):Observable<Token>{
    return this._httpclient.post<Token>("https://reqres.in/api/login",playload);
  }
}
