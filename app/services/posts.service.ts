import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {
    constructor(private http: Http) {
        console.log('Post Service initilizing.....');
    }
    getPost() {
        return this.http.get('/posts')
            .map(res=> res.json()).filter((value)=>{console.log('1'); return true;});
    }
}


