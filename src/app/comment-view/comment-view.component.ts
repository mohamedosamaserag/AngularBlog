import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../_models/blog';
import { BlogService } from '../_Services/blog.service';

@Component({
  selector: 'app-comment-view',
  templateUrl: './comment-view.component.html',
  styleUrls: ['./comment-view.component.css']
})
export class CommentViewComponent implements OnInit {

  Eblog: Blog =new Blog;
  constructor(public BlogService:BlogService, public ar: ActivatedRoute, public router: Router) { }

  ngOnInit(): void {
    let id='';
    this.ar.params.subscribe(
      a=>{
        console.log(a);
       id = a['id'];
        this.BlogService.getBlogById(id).subscribe(
          d=>{
            this.Eblog=d;
          });
      });
  }

}
