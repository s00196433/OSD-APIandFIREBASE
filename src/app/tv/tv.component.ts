import { Component, OnInit} from '@angular/core';

import { TvmazeApiService } from '../services/tvmaze-api.service';
import { ITVMAZEresponse, TVMAZEresponse } from '../services/tvmazeresponse';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import {AngularFirestoreCollection , AngularFirestore} from "@angular/fire/firestore";



@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css'],
  providers: [TvmazeApiService]
  
})
export class TvComponent implements OnInit {
  tvsData: ITVMAZEresponse[];
  tvData:ITVMAZEresponse;
  
 





  
  errorMessage:any;

  constructor(private __TvmazeApiService:TvmazeApiService){
  }


  getTvDetails(tvName:string) : boolean{

    

    this.__TvmazeApiService.getTvData(tvName).subscribe(
      tvData => {
        this.tvData=tvData;
        
      },
      error => this.errorMessage = <any>console.error  
    ); 
    return false;

 
  } 



  ngOnInit(){
    this.__TvmazeApiService.getTVData().subscribe(tvsData => {tvsData = tvsData});
  }
  
  addTheTv(name:string,premiered:string,summary:string,image:string):boolean{
    let tempTv:ITVMAZEresponse;
    tempTv=new TVMAZEresponse(name,premiered,summary,image);
    this.__TvmazeApiService.addShowData(tempTv);
    return false;
  } 

 
}
