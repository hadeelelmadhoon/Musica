import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Headers } from'@angular/http';
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

  verifyUser(email){
    console.log(email);
    return this.http.get(environment.url + `/verify/${email}`);
  } 

  editUser(id, name, email, username, status, authority, verified) {
    const user = { 
      name: name,
      email: email,
      username: username,
      status: status,
      authority: authority,
      verified: verified
    };
    return this.http.post(environment.url + `/users/update/${id}`, user);
  }

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

  getSongs(){
    return this.http.get(environment.url + '/charts');
  }

  getSongsAdmin(){
    return this.http.get(environment.url + '/songs');
  }

  editHidden(id, title, artist, album, track, year, genre, hidden){
    const song = {
      title: title,
      artist: artist, 
      album: album, 
      track: track, 
      year: year, 
      genre: genre,
      hidden: !hidden
    };
    return this.http.post(environment.url + `/songs/edit/${id}`, song);
  }

  addSong(title, artist, album, track, year, genre){
    const song = {
      title: title,
      artist: artist, 
      album: album, 
      track: track, 
      year: year, 
      genre: genre
    };
    return this.http.post(environment.url + '/charts/add', song);
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

  getPolicy(type){
    return this.http.get(environment.url + `/policy/${type}`);
  }
}
