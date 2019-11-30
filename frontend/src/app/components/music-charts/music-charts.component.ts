import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { Songs } from '../../../../../backend/models/songs.model';
import { SongsService } from '../../services/songs.service'
import { AuthService } from '../../services/auth.service'
import { Reviews } from '../../../../../backend/models/reviews.model';

@Component({
  selector: 'app-music-charts',
  templateUrl: './music-charts.component.html',
  styleUrls: ['./music-charts.component.css']
})

export class MusicChartsComponent implements OnInit {

  reviews: Reviews[];
  songs: Songs[];
  displayedColumns = ['title', 'artist', 'rating'];

  constructor(
    private songsService: SongsService, 
    private router: Router,
    private authService: AuthService
    ) { }

  ngOnInit() {
    this.fetchSongs();
  }

  fetchSongs() {
    this.songsService
      .getSongs()
      .subscribe((data: Songs[]) => {
        this.songs = data;
        console.log('Data requested ...');
        console.log(this.songs);
      });
  }

  getReviews(songId){
    this.router.navigate([`/reviews/${songId}`]);
  }

  fetchRecentReview(songId){
    this.authService.getRecentReview(songId)
    .subscribe((data: Reviews[]) => {
      this.reviews = data;
      console.log('Data requested ...');
      console.log(this.reviews);
    });
  }

  // fetchReviews(songId){
  //   this.authService
  //     .getReviews(songId)
  //     .subscribe((reviews: Reviews[]) => {
  //       this.reviews = reviews;
  //       console.log('Data requested ...');
  //       console.log(this.reviews);
  //     });
  // }

}
