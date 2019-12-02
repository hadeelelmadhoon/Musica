import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service'

import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {

  email: String;

  constructor(private authService: AuthService, private router: Router, private flashMessagesServices: FlashMessagesService,) { }

  ngOnInit() {
  }

  // verify function that is connected to button
  verify(){
    // get verify user from authService
    this.authService.verifyUser(this.email).subscribe(data => {
      var json = JSON.parse(JSON.stringify(data));
      if(json.success){
        // if succesful, route to login
        this.flashMessagesServices.show(json.msg, { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/login']);
      }
      else{
        this.flashMessagesServices.show(json.msg, { cssClass: 'alert-danger', timeout: 3000 });
      }
    });

  }

}
