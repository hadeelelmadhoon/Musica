import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {

  id: String;

  createForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) { 
    this.createForm = this.fb.group({
      username: new FormControl({value: JSON.parse(localStorage.getItem('user')).username, disabled: true}),
      review: '',
      rating: ''
    });
  }

  addReview(username, review, rating) {
    this.authService.addReview(this.id, username, review, rating).subscribe(() => {
      this.router.navigate([`/reviews/add/${this.id}`]);
      this.back();
    });
  }

  back(){
    this.router.navigate([`/reviews/${this.id}`]);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.songId;
      console.log(this.id);
    });
  }

}
