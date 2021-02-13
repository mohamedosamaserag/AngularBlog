import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../_models/user';
import { UserService } from '../_Services/user.service';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {

  user:User=new User;
  constructor(public userService:UserService,public router:Router, public ar: ActivatedRoute) { }
  deleteUser(){
    console.log("serag");
    let id:any=localStorage.getItem('userID');
    // localStorage.removeItem('token');
    // localStorage.removeItem('userID');
    this.userService.deleteUser(id).subscribe(
      d=>{
        console.log(d);
        this.router.navigateByUrl('/home');

      });

  }
  cancel(){
    this.router.navigateByUrl('/myProfile');
  }
  ngOnInit(): void {
    let id='';
    this.ar.params.subscribe(
      a=>{
        console.log(a);
        id = a['id'];
        this.userService.getUserByID(id).subscribe(
          d=>{
            console.log(d);
            this.user=d;
          });
      });
  }


}
