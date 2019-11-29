import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { Reviews } from '../../../../../backend/models/reviews.model';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-view-reviews',
  templateUrl: './view-reviews.component.html',
  styleUrls: ['./view-reviews.component.css']
})
export class ViewReviewsComponent implements OnInit {

  reviews: Reviews[];
  displayedColumns = ['review', 'rating'];

  constructor(
    private router: Router,
    private authService: AuthService
    ) { }

  ngOnInit() {
  }

  // fetchReviews(songId){
  //   this.authService
  //     .getReviews(songId)
  //     .subscribe((reviews: Reviews[]) => {
  //       this.reviews = reviews;
  //       console.log('Data requested ...');
  //       console.log(this.reviews);
  //     });
  // }

}
