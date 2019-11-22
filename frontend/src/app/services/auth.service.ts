import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { HttpClient } from '@angular/common/http';
//import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;
  constructor(private http: HttpClient) { }

  registerUser(user){
    // let headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:4000/', user);
  }
}
