import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { MatSnackBar } from '@angular/material';

import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-edit-policy',
  templateUrl: './edit-policy.component.html',
  styleUrls: ['./edit-policy.component.css']
})
export class EditPolicyComponent implements OnInit {

  type: String;
  policy: any = {};
  updateForm: FormGroup;

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar, private fb: FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.type = params.type;
      console.log(this.type);
      // this.authService.getPolicy(this.type).subscribe(res => {
      //   this.policy = res;
      //   this.updateForm.get('title').setValue(this.policy.title);
      //   this.updateForm.get('content').setValue(this.policy.content);
      // });
    });
  }

  createForm() {
    this.updateForm = this.fb.group({
      title: '',
      content: ''
    });
  }

  updatePolicy(title, content) {
    this.authService.editPolicy(this.type, title, content).subscribe(() => {
      this.snackBar.open('Issue updated successfully', 'OK', {
        duration: 3000,
      });
      this.router.navigate(['/charts']);
    });
  }
}
