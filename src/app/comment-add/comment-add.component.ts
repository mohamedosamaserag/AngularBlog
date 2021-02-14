import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../_models/blog';
import { BlogService } from '../_Services/blog.service';
import { Comment } from '../_models/comment';

@Component({
  selector: 'app-comment-add',
  templateUrl: './comment-add.component.html',
  styleUrls: ['./comment-add.component.css']
})
export class CommentAddComponent implements OnInit {
  Eblog: Blog =new Blog;
  comment: Comment= new Comment;
  blog!: Blog;

  constructor(public BlogService:BlogService, public ar: ActivatedRoute, public router: Router) { }

  ngOnInit(): void {
    let id = this.ar.snapshot.paramMap.get('id') ?? '';
 
     this.BlogService.getBlogById(id).subscribe(
      d=>{
      this.Eblog=d;
    });
     
  }
  
  addComment(){
    console.log(this.Eblog);
    console.log(this.comment);
      return this.BlogService.addComment(this.Eblog._id, this.comment).subscribe(
        a =>{
          console.log(a);
          this.router.navigateByUrl('/home');
        });
  }

  cancel(){
    this.router.navigateByUrl('/home');
  }

}
