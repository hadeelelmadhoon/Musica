import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;

  constructor(
    private validateService: ValidateService, 
    private flashMessagesServices: FlashMessagesService,
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    }

    if(!this.validateService.validateRegister(user)){
      this.flashMessagesServices.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }

    if(!this.validateService.validateEmail(user.email)){
      this.flashMessagesServices.show('Please enter valid email', { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }

    if(!this.validateService.validatePassword(user.password)){
      var errorStr = "Password must contain i) at least one upper case letter (A – Z), ii) at least one lower case letter(a-z), iii) At least one digit (0 – 9), iv) at least one special characters of !@#$%&*()";
      this.flashMessagesServices.show(errorStr, { cssClass: 'alert-danger', timeout: 5000 });
      return false;
    }

    // Register User

    this.authService.registerUser(user).subscribe(data => {
      var json = JSON.parse(JSON.stringify(data));
      if(json.success){
        this.flashMessagesServices.show('You are now registered and can login!', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/login']);
      }
      else{
        this.flashMessagesServices.show(json.msg, { cssClass: 'alert-danger', timeout: 3000 });
        this.router.navigate(['/']);
      }
    });

  }

}
