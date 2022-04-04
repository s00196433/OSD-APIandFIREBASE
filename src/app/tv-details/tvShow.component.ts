import { Component, OnInit , Input} from '@angular/core';
import {ITVMAZEresponse,TVMAZEresponse} from "../services/tvmazeresponse";
import{TvmazeApiService} from '../services/tvmaze-api.service';
import{FireTvService} from '../services/firestore-tv.service';
import{TvComponent} from '../tv/tv.component';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable} from 'rxjs';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import {AngularFirestoreCollection , AngularFirestore} from "@angular/fire/firestore";
import { tvInterface } from '../tvinterface';

@Component({
  selector: 'app-tvShow',
  templateUrl: './tvShow.component.html',
  styleUrls: ['./tvShow.component.css'],
  providers:[FireTvService]

})
export class TvShowComponent implements OnInit {
 
  fsTvmazeData:tvInterface[];



posterImageWidth:number=200;
constructor(private _FireTvService:FireTvService ) { }


  ngOnInit() {
   this._FireTvService.getItems().subscribe(fsTvmazeData => {
    this.fsTvmazeData = fsTvmazeData; 

   })};
  }



