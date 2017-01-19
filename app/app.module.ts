import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpModule, XHRBackend, RequestOptions, Http} from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
import {AlertModule  } from 'ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap';


import { AppComponent }  from './app.component';
import { UserComponent } from './components/user.component';
import {routing} from "./app.router";
import {PostComponent} from "./components/post.component";
import {GalleryComponent} from "./components/gallery.component";
import {HttpService} from "./services/http.service";
import {Ng2AutoCompleteModule} from "ng2-auto-complete";

import {AutoCompleteComponent} from "./components/autocomplete.component";
import {MdInputModule} from "@angular/material";



function httpClientFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions): Http {
  return new HttpService(xhrBackend, requestOptions);
}

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule,routing,AlertModule.forRoot(),ModalModule.forRoot(),Ng2AutoCompleteModule,MdInputModule],
  declarations: [AppComponent, UserComponent,PostComponent,GalleryComponent,AutoCompleteComponent ],
  bootstrap:    [ AppComponent ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' }
    ,{provide:Http,useFactory: httpClientFactory,deps:[XHRBackend,RequestOptions]}
  ]
})
export class AppModule { }
