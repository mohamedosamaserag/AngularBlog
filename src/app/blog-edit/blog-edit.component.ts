import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../_models/blog';
import { BlogService } from '../_Services/blog.service';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {

  myDate = new Date();
 // Eblog: Blog =new Blog( '', '', '', [''], '', 0, this.myDate, this.myDate);
  Eblog: Blog =new Blog;
  constructor(public BlogService: BlogService, public ar: ActivatedRoute, public router: Router) { }

  edit(){
    return this.BlogService.editBlog(this.Eblog._id, this.Eblog).subscribe(
      a =>{
        console.log(a);
        this.router.navigateByUrl('/myProfile');
      });
  }


  ngOnInit(): void {
    let id='';
    this.ar.params.subscribe(
      a=>{
        id = a['id'];
        this.BlogService.getBlog(id).subscribe(
          d=>{
            this.Eblog=d;
          });
      });
  }


}
