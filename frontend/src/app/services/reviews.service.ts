import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor(private http: HttpClient) { }

  addReview(review, rating){
    const songReview = {
      review: review,
      rating: rating
    };
    return this.http.post('http://localhost:4000/addReview', songReview);
  }

  getReviews(){
    return this.http.get('http://localhost:4000/reviews');
  }
}
