import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatToolbarModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages'
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { MusicChartsComponent } from './components/music-charts/music-charts.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AddReviewComponent } from './components/add-review/add-review.component';
import { ViewReviewsComponent } from './components/view-reviews/view-reviews.component';
import { AddSongComponent } from './components/add-song/add-song.component';
import { ManagerHomePageComponent } from './components/manager-home-page/manager-home-page.component';
import { ViewUsersComponent } from './components/view-users/view-users.component';
import { SecurityAndPrivacyComponent } from './components/security-and-privacy/security-and-privacy.component';
import { NoticeAndTakedownComponent } from './components/notice-and-takedown/notice-and-takedown.component';
import { ProcedureComponent } from './components/procedure/procedure.component';

import { ValidateService } from './services/validate.service'
import { AuthService } from './services/auth.service'

const routes: Routes = [
  { path: 'addReview', component: AddReviewComponent },
  { path: 'addSong', component: AddSongComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'manager', component: ManagerHomePageComponent},
  { path: 'charts', component: MusicChartsComponent},
  { path: 'notice', component: NoticeAndTakedownComponent},
  { path: 'procedure', component: ProcedureComponent },
  { path: 'privacy', component: SecurityAndPrivacyComponent },
  { path: 'reviews', component: ViewReviewsComponent },
  { path: 'users', component: ViewUsersComponent },
  { path: '', component: WelcomePageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    MusicChartsComponent,
    LoginPageComponent,
    AddReviewComponent,
    ViewReviewsComponent,
    AddSongComponent,
    ManagerHomePageComponent,
    ViewUsersComponent,
    SecurityAndPrivacyComponent,
    NoticeAndTakedownComponent,
    ProcedureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
    HttpClientModule
  ],
  providers: [ValidateService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
