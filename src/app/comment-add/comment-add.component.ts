import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../_models/blog';
import { BlogService } from '../_Services/blog.service';

@Component({
  selector: 'app-comment-add',
  templateUrl: './comment-add.component.html',
  styleUrls: ['./comment-add.component.css']
})
export class CommentAddComponent implements OnInit {
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
  
  addComment(){
    
      return this.BlogService.addComment(this.Eblog._id, this.Eblog).subscribe(
        a =>{
          console.log(a);
          this.router.navigateByUrl('/home');
        });
  }

  cancel(){
    this.router.navigateByUrl('/home');
  }

}
