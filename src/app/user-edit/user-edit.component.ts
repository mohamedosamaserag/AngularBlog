import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../_models/user';
import { UserService } from '../_Services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  editUser=new User;
  constructor(public userService:UserService, public ar: ActivatedRoute, public router: Router) { }

  edit(){
    let id:any=localStorage.getItem('userID');

    return this.userService.editUser(id, this.editUser).subscribe(
      a =>{
        console.log(a);
        this.router.navigateByUrl('/myProfile');
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
            this.editUser=d;
          });
      });
  }

}
