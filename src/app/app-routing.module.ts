import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogAddComponent } from './blog-add/blog-add.component';

import { BlogDeleteComponent } from './blog-delete/blog-delete.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { CommentAddComponent } from './comment-add/comment-add.component';
import { CommentViewComponent } from './comment-view/comment-view.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { SearchIdComponent } from './search-id/search-id.component';
import { SearchTitleComponent } from './search-title/search-title.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'search/:id', component: SearchIdComponent},
  {path: 'search/:title', component: SearchTitleComponent},
  {path: 'userProfile', component: UserProfileComponent},
  {path: 'myProfile', component: MyProfileComponent},
  {path: 'addBlog', component: BlogAddComponent},
  {path: 'editBlog/:id', component: BlogEditComponent},

  {path: 'deleteBlog/:id', component: BlogDeleteComponent},
  {path: 'editUser', component: UserEditComponent},
  {path: 'deleteUser', component: UserDeleteComponent},
  {path: 'addComment', component: CommentAddComponent},
  {path: 'viewComment', component: CommentViewComponent},


  {path: '', redirectTo: '/register', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
