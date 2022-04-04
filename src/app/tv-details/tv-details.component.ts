import { Component, OnInit , Input} from '@angular/core';
import {ITVMAZEresponse,TVMAZEresponse} from "../services/tvmazeresponse";
import{TvmazeApiService} from '../services/tvmaze-api.service';
import{FireTvService} from '../services/firestore-tv.service';
import{TvComponent} from '../tv/tv.component';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable} from 'rxjs';
import { AngularFirestoreDocument, AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import {AngularFirestoreCollection , AngularFirestore} from "@angular/fire/firestore";
import { tvInterface } from '../tvinterface';
import {specialPipe} from '../specialPipe';

@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.css'],
  providers:[FireTvService]
})


export class TvDetailsComponent implements OnInit {

  fsTvmazeData:tvInterface[];
  fsTvmazeDoc:AngularFirestoreDocument<TVMAZEresponse>



posterImageWidth:number=200;
constructor(private _FireTvService:FireTvService ) { }
 

  ngOnInit() {
  this._FireTvService.getItems().subscribe(fsTvmazeData => {
  this.fsTvmazeData = fsTvmazeData;
  });
} 




  
deleteItem1(event,tvID:string)
 {
   console.log(tvID);
   this._FireTvService.deleteItem2(tvID);
 }




   };


  

  
 


