import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable} from 'rxjs';
import {catchError,tap} from 'rxjs/operators';
import { ITVMAZEresponse } from './tvmazeresponse';
import { tvInterface } from '../tvinterface';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import {AngularFirestoreCollection , AngularFirestore , AngularFirestoreDocument} from "@angular/fire/firestore";

import { map } from "rxjs/operators"; 


@Injectable()

export class FireTvService {
  fsTvmazeDataCollection:AngularFirestoreCollection<tvInterface>;
  fsTvmazeData:Observable<tvInterface[]>;
  itemDoc: AngularFirestoreDocument<tvInterface>;



  errorMessage:string;


  constructor(private _http:HttpClient, public afs:AngularFirestore){ 
    this.fsTvmazeDataCollection= afs.collection<tvInterface>("tv_data",ref => ref.orderBy('name','asc'));

  this.fsTvmazeData =this.afs.collection('tv_data').snapshotChanges().pipe(map(changes =>{
    return changes.map(a => {
      const data = a.payload.doc.data() as tvInterface;
      data.id = a.payload.doc.id;
      return data;
    }); 
  }));
}

  
  getItems(){
    return this.fsTvmazeData
  }

  deleteItem2(tvID:string) : void
  {
    console.log(tvID);
    this.fsTvmazeDataCollection.doc(tvID).delete();

  } 

  


}

