import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

import { Policy } from '../../../../../backend/models/policies.model';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-security-and-privacy',
  templateUrl: './security-and-privacy.component.html',
  styleUrls: ['./security-and-privacy.component.css']
})
export class SecurityAndPrivacyComponent implements OnInit {

  policy: Policy[];
  displayedColumns = ['title', 'content'];

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.fetchPolicy();
  }

  fetchPolicy() {
    this.authService
      .getPolicy('privacy')
      .subscribe((policy: Policy[]) => {
        this.policy = policy;
        console.log('Data requested ...');
      });
  }

}
