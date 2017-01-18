import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {HttpService} from "./http.service";

@Injectable()
export class GalleryService {
    constructor(private http: Http) {
        console.log('Gallery service Initialize.....');
    }
    getGallery() {
       return  this.http.get('/photos')
            .map(res => res.json());
    }
}
