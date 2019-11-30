import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Headers } from'@angular/http';
// import { BehaviorSubject, Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
import { tokenNotExpired } from 'angular2-jwt'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;
  constructor(
    private http: HttpClient,
    ) { }

  registerUser(user){
    return this.http.post(environment.url, user);
  }

  authenticateUser(user){
    return this.http.post(environment.url + '/authenticate', user);
  }

  getUsers(){
    return this.http.get(environment.url + '/users');
  }

  getUsersById(id) {
    return this.http.get(environment.url + `/users/${id}`);
  }

  editUser(id, name, email, username, status, authority) {
    const user = { 
      name: name,
      email: email,
      username: username,
      status: status,
      authority: authority
    };
    return this.http.post(environment.url + `/users/update/${id}`, user);
  }

  // getAddReview(){
  //   this.loadToken();
  //   // const headers = new HttpHeaders();
  //   // headers.append('Authorization', 'this.authToken');
  //   // headers.append('Content-Type',  'application/json');
  //   const headers = {
  //     headers: new HttpHeaders({
  //       'Content-Type':  'application/json',
  //       'Authorization': this.authToken
  //     })
  //   };
  //   return this.http.get('http://localhost:4000/reviews/add/:songId', headers);
  // }

  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  addReview(songId, username, review, rating){
    this.loadToken();
    const songReview = {
      songId: songId,
      username: username,
      review: review,
      rating: rating
    };
    const headers = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': this.authToken
      })
    };
    return this.http.post(environment.url + `/reviews/add/${songId}`, songReview, headers);
  }

  getReviews(songId){
    // console.log("enter")
    // console.log('http://localhost:4000/reviews'+'?songId='+songId)
    return this.http.get(environment.url + `/reviews/${songId}`);
  }

  getRecentReview(songId){
    // console.log("enter")
    // console.log('http://localhost:4000/reviews'+'?songId='+songId)
    return this.http.get(environment.url + `/reviews/recent/${songId}`);
  }

  loggedIn(){
    return tokenNotExpired('id_token');
  }

  isManager(){
    let authority = JSON.parse(localStorage.getItem('user')).authority;
    return(authority == 'Manager');
  }

  isActive(){
    let status = JSON.parse(localStorage.getItem('user')).status;
    return(status == 'Active');
  }
}
