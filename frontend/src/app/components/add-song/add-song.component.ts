import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.css']
})
export class AddSongComponent implements OnInit {

  createForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private flashMessagesServices: FlashMessagesService
  ) {
    console.log(this.authService.loggedIn())
    if(!this.authService.loggedIn()){
      console.log('not registered');
      this.router.navigate([`/charts`]);
      this.flashMessagesServices.show('You must be registered', { cssClass: 'alert-danger', timeout: 3000 });
    }
    this.createForm = this.fb.group({
      title: ['', Validators.required],
      artist: ['', Validators.required],
      album: '',
      track: '',
      year: '',
      genre: ''
    });
   }

   addSong(title, artist, album, track, year, genre) {
    this.authService.addSong(title, artist, album, track, year, genre).subscribe(song => {
      this.router.navigate(['/charts/add']);
      console.log(song)
      this.back();
    });
  }

  back(){
    this.router.navigate(['/charts']);
  }

  ngOnInit() {
  }

}
