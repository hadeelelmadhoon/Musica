import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

import { Policy } from '../../../../../backend/models/policies.model';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-notice-and-takedown',
  templateUrl: './notice-and-takedown.component.html',
  styleUrls: ['./notice-and-takedown.component.css']
})
export class NoticeAndTakedownComponent implements OnInit {

  policy: Policy[];
  displayedColumns = ['title', 'content'];

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.fetchPolicy();
  }

  fetchPolicy() {
    this.authService
      .getPolicy('dmca')
      .subscribe((policy: Policy[]) => {
        this.policy = policy;
        console.log('Data requested ...');
      });
  }

  edit(type){
    console.log(type);
    this.router.navigate([`/policy/update/${type}`]);
  }

}

