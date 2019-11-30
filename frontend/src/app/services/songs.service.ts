import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SongsService {

  constructor(private http: HttpClient) { }

  getSongs(){
    return this.http.get(environment.url + '/charts');
  }

  // addProduct(title, artist){
  //   const song = {
  //     title: title,
  //     artist: artist
  //   };
  //   return this.http.post('http://localhost:4000/products/add', song);
  // }

}
