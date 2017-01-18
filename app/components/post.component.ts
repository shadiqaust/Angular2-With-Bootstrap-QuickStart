/**
 * Created by BS157 on 1/13/2017.
 */

import {Component} from "@angular/core";
import {PostsService} from "../services/posts.service";
@Component({
  moduleId:module.id,
  templateUrl:'post.component.html',
  providers: [PostsService]
})
export class PostComponent{
    posts:Post[];
    constructor(private postsService:PostsService){
        this.postsService.getPost().subscribe(posts=>{
          this.posts=posts;
        })
    }

}
interface Post {
  id: number;
  title: string;
  body:string;
}
