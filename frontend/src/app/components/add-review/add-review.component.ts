import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';

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
    private route: ActivatedRoute,
    private flashMessagesServices: FlashMessagesService,
  ) { 
    console.log(this.authService.loggedIn())
    if(!this.authService.loggedIn()){
      console.log('not registered');
      this.router.navigate([`/`]);
      this.flashMessagesServices.show('You must be registered', { cssClass: 'alert-danger', timeout: 3000 });
    }
    this.createForm = this.fb.group({
      username: new FormControl({value: JSON.parse(localStorage.getItem('user')).username, disabled: true}),
      review: ['', Validators.required],
      rating: ['', Validators.required]
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
