import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { MatSnackBar } from '@angular/material';

import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  id: String;
  user: any = {};
  updateForm: FormGroup;

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar, private fb: FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.authService.getUsersById(this.id).subscribe(res => {
        this.user = res;
        console.log(this.user);
        this.updateForm.get('name').setValue(this.user.name);
        this.updateForm.get('email').setValue(this.user.email);
        this.updateForm.get('username').setValue(this.user.username);
        this.updateForm.get('status').setValue(this.user.status);
        this.updateForm.get('authority').setValue(this.user.authority);
      });
    });
  }

  createForm() {
    this.updateForm = this.fb.group({
      name: new FormControl({value: '', disabled: true}),
      email: new FormControl({value: '', disabled: true}),
      username: new FormControl({value: '', disabled: true}),
      status: '',
      authority: ''
    });
  }

  updateUser(name, email, username, status, authority) {
    this.authService.editUser(this.id, name, email, username, status, authority).subscribe(() => {
      this.snackBar.open('Issue updated successfully', 'OK', {
        duration: 3000,
      });
      this.router.navigate(['/users']);
    });
  }

}
