import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

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

  constructor(private songsService: SongsService, private router: Router) { }

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

}
