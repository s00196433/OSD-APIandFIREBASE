import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable} from 'rxjs';
import {catchError,tap} from 'rxjs/operators';
import { ITVMAZEresponse } from './tvmazeresponse';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import {AngularFirestoreCollection , AngularFirestore} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class TvmazeApiService {
    

    tvsDataCollection:AngularFirestoreCollection<ITVMAZEresponse>;
    tvsData:Observable<ITVMAZEresponse[]>;
    allTvsData:ITVMAZEresponse[];
    errorMessage:string;

  private _siteURL="https://api.tvmaze.com/singlesearch/shows?q=";
  


  private handleError(err:HttpErrorResponse)
  {
    console.log('TvmazeApiService:' + err.message);
    return Observable.throw(err.message);
  }
  constructor(private _http:HttpClient, private _afs:AngularFirestore)
 /* constructor(private _http:HttpClient) */ { 
    this.tvsDataCollection=_afs.collection<ITVMAZEresponse>("tv_data");
  }

  getTvData(tvName): Observable<ITVMAZEresponse>{
    return this._http.get<ITVMAZEresponse>(this._siteURL + tvName)
    .pipe(
      tap(data => console.log('tvdata/error'+ JSON.stringify(data))
      ),
      catchError(this.handleError)
    );
  }

  getTVData():Observable<ITVMAZEresponse[]> {
    this.tvsData = this.tvsDataCollection.valueChanges({ idField:'id'});
    this.tvsData.subscribe(
      data => console.log("getTvData:" + JSON.stringify(data))
      
    )
    return this.tvsData;
  }

  addShowData(IOMBResponse:ITVMAZEresponse): void {
    this.tvsDataCollection.add(JSON.parse(JSON.stringify(IOMBResponse)));
    console.log("addShowData" + JSON.stringify(IOMBResponse));
  }





}
