import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';



import { AppComponent }  from './app.component';
import { UserComponent } from './components/user.component';
import {routing} from "./app.router";
import {PostComponent} from "./components/post.component";
import {GalleryComponent} from "./components/gallery.component";
import {AlertModule  } from 'ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap';


@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule,routing,AlertModule.forRoot(),ModalModule.forRoot()],
  declarations: [AppComponent, UserComponent,PostComponent,GalleryComponent ],
  bootstrap:    [ AppComponent ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' }
  ]
})
export class AppModule { }
