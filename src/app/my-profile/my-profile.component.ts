import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../_models/blog';
import { User } from '../_models/user';
import { BlogService } from '../_Services/blog.service';
import { UserService } from '../_Services/user.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  //user!:User;
  blogs:Blog[]=[];
  // blogs: Blog = new Blog;
  user: User= new User;
  blog!:Blog;

  // followingNumber= 0;
  // followersNumber= 0;

  constructor(public blogService:BlogService, public ar: ActivatedRoute, public userService:UserService, public router:Router) {

    let id:any = localStorage.getItem('userID');//this.blogs.author;
    console.log(id);
    this.userService.getUserByID(id).subscribe(
      data=>{
        // this.user=data;
      }
    )
  }



  ngOnInit(): void {

    // let id ='';
    // this.ar.params.subscribe(
    //   a=>{
    //     console.log(a);
    //     id = this.blogs[0].author;
    //     console.log(id);
    //     this.userService.getUserByID(id).subscribe(
    //       d =>{
    //         console.log(d);
    //         this.user = d;
    //       });
    //   });


    this.blogService.getBlog().subscribe(d=>{
      console.log(d);
      this.blogs=d;

    });




    // this.userService.getUserByID(this.blogs.author).subscribe(d=>{
    //   console.log(d);
    //   this.user=d;
    // });


  }


}


