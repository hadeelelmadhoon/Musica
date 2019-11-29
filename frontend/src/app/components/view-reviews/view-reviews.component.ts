import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Reviews } from '../../../../../backend/models/reviews.model';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-view-reviews',
  templateUrl: './view-reviews.component.html',
  styleUrls: ['./view-reviews.component.css']
})
export class ViewReviewsComponent implements OnInit {

  songId: String;
  reviews: Reviews[];
  displayedColumns = ['username', 'review', 'rating'];

  constructor(
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.songId = params.songId;
      this.authService
      .getReviews(this.songId)
      .subscribe((reviews: Reviews[]) => {
        this.reviews = reviews; 
        console.log('Data requested ...');
        console.log(this.reviews);
      });
    });
  }

  addReview(){
    this.router.navigate([`/reviews/add/${this.songId}`]);
  }
}

