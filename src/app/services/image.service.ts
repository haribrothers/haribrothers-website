import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ImageService {

  constructor(private http:HttpClient) { }

  getImages(){
   return this.http.get("https://picsum.photos/v2/list?page=2&limit=100");
  }
}