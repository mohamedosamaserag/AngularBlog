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
  newBlog: Blog = new Blog('', '', '', [''], [''], '', this.myDate, this.myDate);
  photo!: File;
  constructor(private blogService: BlogService, private router: Router) { }

  Addpost(): void{
    if(this.photo){
      const formData = new FormData();
      formData.append('photo',this.photo);
      this.blogService.addBlogPhoto(this.newBlog,formData).subscribe(
        a => {
          console.log(a);
          this.router.navigateByUrl('/home');
        }
      );
    }
    else{
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
