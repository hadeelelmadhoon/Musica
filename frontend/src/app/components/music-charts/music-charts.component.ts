import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { Songs } from '../../../../../backend/models/songs.model';
import { SongsService } from '../../services/songs.service'
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-music-charts',
  templateUrl: './music-charts.component.html',
  styleUrls: ['./music-charts.component.css']
})

export class MusicChartsComponent implements OnInit {

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

  // selectedSong(column){
  //   console.log(column._id);
  //   this.router.navigate(['http://localhost:4000/reviews?songId='+column._id])
  // }

  fetchReviews(songId){
    this.router.navigate([`/reviews/${songId}`]);
    // this.reviewsService
    //   .getReviews(songId)
    // this.router.navigate(['http://localhost:4000/reviews'])
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
