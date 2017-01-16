import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()

export class GalleryService {
    constructor(private http: Http) {
        console.log('Gallery service Intiliaze.....');
    }
    getGallery() {
       return  this.http.get('https://jsonplaceholder.typicode.com/photos')
            .map(res => res.json());
    }
}
