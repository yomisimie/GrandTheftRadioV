import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgxYoutubePlayerModule} from 'ngx-youtube-player';
import {NgxFaviconModule} from 'ngx-favicon';
import {AvailableCustomFavicons, customFavicons} from '../favicon.config';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxYoutubePlayerModule,
    NgxFaviconModule.forRoot<AvailableCustomFavicons>({
      faviconElementId: 'favicon',
      defaultUrl: 'favicon.ico',
      custom: customFavicons
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
