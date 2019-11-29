import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

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
    private fb: FormBuilder
  ) { 
    this.createForm = this.fb.group({
      username: new FormControl({value: JSON.parse(localStorage.getItem('user')).username, disabled: true}),
      review: '',
      rating: ''
    });
  }

  addReview(review, rating) {
    this.authService.addReview(review, rating).subscribe(() => {
      this.router.navigate(['/reviews']);
    });
  }

  ngOnInit() {
    // this.authService.getAddReview().subscribe(review => {
    //   this.router.navigate(['/reviews'])
    // })
  }

}
