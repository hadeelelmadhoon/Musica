import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatToolbarModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatIconModule, MatButtonModule, MatCardModule, MatTableModule, MatDividerModule, MatSnackBarModule, MatCheckboxModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages'
import { HttpClientModule } from '@angular/common/http'; 
import {CdkTableModule} from '@angular/cdk/table';
import { ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

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
import { NavbarComponent } from './components/navbar/navbar.component'

import { ValidateService } from './services/validate.service'
import { AuthService } from './services/auth.service';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { SongsComponent } from './components/songs/songs.component';
import { FooterComponent } from './components/footer/footer.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { EditPolicyComponent } from './components/edit-policy/edit-policy.component';

const routes: Routes = [
  { path: 'reviews/add/:songId', component: AddReviewComponent },
  { path: 'charts/add', component: AddSongComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'manager', component: ManagerHomePageComponent},
  { path: 'charts', component: MusicChartsComponent},
  { path: 'notice', component: NoticeAndTakedownComponent},
  { path: 'procedure', component: ProcedureComponent },
  { path: 'privacy', component: SecurityAndPrivacyComponent },
  { path: 'policy/update/:type', component: EditPolicyComponent },
  { path: 'reviews/:songId', component: ViewReviewsComponent },
  { path: 'users', component: ViewUsersComponent },
  { path: 'editUser/:id', component: EditUserComponent },
  { path: 'songs', component: SongsComponent },
  { path: 'verify', component: VerifyEmailComponent},
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
    ProcedureComponent,
    NavbarComponent,
    EditUserComponent,
    SongsComponent,
    FooterComponent,
    VerifyEmailComponent,
    EditPolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatSnackBarModule,
    CdkTableModule,
    MatExpansionModule,
    Ng2SearchPipeModule,
    MatCheckboxModule
  ],
  providers: [ValidateService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
