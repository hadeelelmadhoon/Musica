import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

import { Users } from '../../../../../backend/models/user.model';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {

  users: Users[];
  displayedColumns = ['name', 'email', 'username', 'status', 'authority', 'verified', 'actions'];

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    if(!this.authService.loggedIn()){
      this.router.navigate([`/login`]);
    } 
    else if(!this.authService.isManager()){
      this.router.navigate([`/charts`]);
    }
    else{
    this.authService
      .getUsers()
      .subscribe((users: Users[]) => {
        this.users = users;
        console.log('Data requested ...');
        console.log(this.users);
      });
    }
  }

  editUser(id) {
    this.router.navigate([`/editUser/${id}`]);
  }

}
