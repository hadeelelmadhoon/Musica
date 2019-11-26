import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { HttpClient } from '@angular/common/http';
//import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;
  constructor(
    private http: HttpClient,
    //private headers: HttpHeaders
    ) { }

  registerUser(user){
    return this.http.post('http://localhost:4000/', user);
  }

  authenticateUser(user){
    return this.http.post('http://localhost:4000/authenticate', user);
  }

  // getAddReview(){
  //   this.loadToken();
  //   const headers = new HttpHeaders();
  //   headers.append('Authorization', 'this.authToken');
  //   headers.append('Content-Type',  'application/json');
  //   return this.http.get('http://localhost:4000/addReview', { headers });
  // }

  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  // loadToken(){
  //   const token = localStorage.getItem('id_token');
  //   this.authToken = token;
  // }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
