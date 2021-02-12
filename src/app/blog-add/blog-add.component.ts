import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from '../_models/blog';
import { BlogService } from '../_Services/blog.service';

@Component({
  selector: 'app-blog-add',
  templateUrl: './blog-add.component.html',
  styleUrls: ['./blog-add.component.css']
})
export class BlogAddComponent implements OnInit {
  myDate = new Date();


  //newBlog: Blog = new Blog( '', '', '', [''], '', 0, this.myDate, this.myDate);
  //newBlog!:Blog;
  newBlog: Blog = new Blog;
  photo!: File;
  constructor(private blogService: BlogService, private router: Router) { }

  Addpost(): void{

    if(this.photo){
      const formData = new FormData();
      formData.append('photo',this.photo);
      formData.append('title',this.newBlog.title);
      formData.append('tags',this.newBlog.tags);
      formData.append('body',this.newBlog.body);

      this.blogService.addBlogPhoto(formData).subscribe(

        a => {
          console.log(a);
          this.router.navigateByUrl('/home');
        }
      );
    }
    else{
      console.log(this.newBlog);
      this.blogService.addBlog(this.newBlog).subscribe(
        a => {
          console.log(a);
          this.router.navigateByUrl('/home');
        }
      );
    }
  }
  handleFileInput(event: any){
    const fileList: FileList = event.target.files;
    this.photo=fileList[0];
  }
  ngOnInit(): void {
  }

}
