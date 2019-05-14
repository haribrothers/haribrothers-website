import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout'
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SiteHeaderComponent } from './components/site-header/site-header.component';
import { SiteFooterComponent } from './components/site-footer/site-footer.component';
import { ImageService } from './services/image.service';
import { HomeComponent } from './views/home/home.component';
import { FlexSampleComponent } from './views/flex-sample/flex-sample.component';

@NgModule({
  imports:      [ BrowserModule, 
  FormsModule, 
  FlexLayoutModule,
  HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, SiteHeaderComponent, SiteFooterComponent, HomeComponent, FlexSampleComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ImageService]
})
export class AppModule { }
