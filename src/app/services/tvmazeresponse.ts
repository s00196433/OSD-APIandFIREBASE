import {stringify} from 'querystring';

export interface ITVMAZEresponse
{
    id:string;
    name:string;
    premiered:string;
    summary:string;
    image:string;

  }  export class TVMAZEresponse{
    id:string;
    name:string;
    premiered:string;
    summary:string;
    image:string;

    constructor(name:string,premiered:string,summary:string,image:string){

        this.name = name;
        this.premiered = premiered;
        this.summary = summary;
        this.image = image;
    
        } 
} 