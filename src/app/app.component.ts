import { Component, ViewChild, ViewChildren, QueryList, ElementRef, OnInit, AfterContentInit, ViewContainerRef } from '@angular/core';
import { ImageService } from './services/image.service';

import { Image } from './models/image.model';
import { ImageList } from './models/imagelist.model';
import * as Rellax from 'rellax';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit, AfterContentInit  {

  @ViewChildren('cards' , { read: ViewContainerRef }) private card: QueryList<ElementRef>;

  @ViewChild('body',{read:ElementRef}) private body:ElementRef;
  @ViewChild('header',{read:ElementRef}) private header:ElementRef;

  constructor(imageService: ImageService){
    let a = imageService.getImages().subscribe((res:Image[]) => {
      console.log(res[0].download_url);
    });
    
  }

  ngOnInit(){
    // console.log(this.card.first);
    var rellax = new Rellax('.rellax', {
      speed: -2,
      center: false,
      wrapper: '.body',
      round: true,
      vertical: true,
      horizontal: false
    });
  }

  ngAfterContentInit() {
    console.log(this.card);
    var rellax = new Rellax('.rellax', {
      speed: -2,
      center: false,
      wrapper: '.body',
      round: true,
      vertical: true,
      horizontal: false
    });
  }

  stickHeaderOnTop(event){
    // console.log(event);
    let headerNative = this.header.nativeElement as HTMLElement;
    let bodyNative = this.body.nativeElement as HTMLElement;
    let sticky = window.innerHeight;
    // console.log(bodyNative.scrollTop - window.pageYOffset);
  if (bodyNative.scrollTop >= window.innerHeight) {
    // console.log('helloooo');
    headerNative.classList.add("sticky");
  } else {
    headerNative.classList.remove("sticky");
  }  
  }
  
}
