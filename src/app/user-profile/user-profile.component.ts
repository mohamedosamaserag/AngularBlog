import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../_models/blog';
import { User } from '../_models/user';
import { BlogService } from '../_Services/blog.service';
import { UserService } from '../_Services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  blogs: Blog[]=[];
  users: User[]=[];
  blog!:Blog;
  following = "follow";

  // user: User= new User;

  constructor(public blogService:BlogService, public ar: ActivatedRoute, public userService:UserService, public router:Router)
  {
    let userName:any = localStorage.getItem('userName');
    console.log(userName);
    this.userService.getUserByUserName(userName).subscribe(
      data=>{
        this.users=data;
      });
  }
  follow(){
    if(this.following == "follow"){
      this.userService.followUSer(this.users[0].username).subscribe(
        a =>{
          location.reload();
        }
      );
    }
    else{
      this.userService.unfollowUSer(this.users[0].username).subscribe(
        a =>{
          location.reload();
        }
      );
    }
  }

  ngOnInit(): void {

    let item:string="";
    this.ar.params.subscribe(a=>{
      item=a["userName"];
    })
    this.userService.getUserByUserName(item).subscribe(
      a=>{
      this.users=a;
    console.log(a);
    this.blogService.getBlogsByAuthor(this.users[0]._id).subscribe(d=>{
      console.log(d);
      this.blogs=d.reverse();
      });
      });

      ///////////////////////////////////
      let id:any = localStorage.getItem('userID');//this.blogs.author;
      console.log(id);
      this.userService.getUserByID(id).subscribe(
        data=>{
          data.following.findIndex(value =>{
            console.log(this.users[0].username);
            if(value == this.users[0].username){              
              console.log("hii");
              this.following= "unfollow";
            }
          })
        }
      )
  }

}

