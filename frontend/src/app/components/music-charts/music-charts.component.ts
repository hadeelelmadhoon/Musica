import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { Songs } from '../../../../../backend/models/songs.model';
import { SongsService } from '../../services/songs.service'

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
    private router: Router
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

  selectedRow(row){
    console.log(row._id);
  }

}
