import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router'
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  username: String;
  password: String;

  constructor( 
    private authService: AuthService,
    private flashMessagesServices: FlashMessagesService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  onLoginSubmit(){
    const user = {
      username: this.username,
      password: this.password
    }

    this.authService.authenticateUser(user).subscribe(data => {
      var json = JSON.parse(JSON.stringify(data));
      if(json.success){
        this.authService.storeUserData(json.token, json.user);
        if(this.authService.isActive()){
          this.authService.storeUserData(json.token, json.user);
          this.flashMessagesServices.show('Login successful', { cssClass: 'alert-success', timeout: 3000 });
          this.router.navigate(['/charts']);
        }
        else{
          this.authService.logout();
          this.flashMessagesServices.show('Account deactivated, contact site manager', { cssClass: 'alert-danger', timeout: 3000 });
        }
      }
      else{
        this.flashMessagesServices.show(json.msg, { cssClass: 'alert-danger', timeout: 3000 });
        if(json.msg == 'Not verified'){
          this.router.navigate(['/verify']);
        }
      }
    });
  }
}
