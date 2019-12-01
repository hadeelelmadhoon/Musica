import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

import { Songs } from '../../../../../backend/models/songs.model';
import { AuthService } from '../../services/auth.service'

import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {

  songs: Songs[];
  displayedColumns = ['title', 'artist', 'album', 'track', 'year', 'genre', 'hidden'];

  constructor(private authService: AuthService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.fetchSongs();
  }

  fetchSongs() {
    if(!this.authService.loggedIn()){
      this.router.navigate([`/login`]);
    } 
    else if(!this.authService.isManager()){
      this.router.navigate([`/charts`]);
    }
    else{
    this.authService
      .getSongsAdmin()
      .subscribe((song: Songs[]) => {
        this.songs = song;
        console.log('Data requested ...');
        console.log(this.songs);
      });
    }
  }

  setHidden(song){
    this.authService.editHidden(song._id, song.title, song.artist, song.album, song.track, song.year, song.genre, song.hidden).subscribe(() => {
      this.snackBar.open('Issue updated successfully', 'OK', {
        duration: 3000,
      });
    });
  }

}
