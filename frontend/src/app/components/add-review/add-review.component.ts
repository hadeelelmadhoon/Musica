import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReviewsService } from '../../services/reviews.service';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {

  createForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private reviewsService: ReviewsService,
    private fb: FormBuilder
  ) { 
    this.createForm = this.fb.group({
      review: '',
      rating: ''
    });
  }

  addReview(review, rating) {
    this.reviewsService.addReview(review, rating).subscribe(() => {
      this.router.navigate(['/reviews']);
    });
  }

  ngOnInit() {
    // this.authService.getAddReview().subscribe(review => {
    //   this.router.navigate(['/reviews'])
    // })
  }

}
