import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import {specialPipe} from './specialPipe';


import {HttpClientModule} from '@angular/common/http';
import { TvComponent } from './tv/tv.component';
import { TvDetailsComponent } from './tv-details/tv-details.component';

@NgModule({
  declarations: [
    AppComponent,
    specialPipe,
    TvComponent,
    TvDetailsComponent
  ],
  imports: [
    
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule


  ],
  providers: [specialPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
