import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SearchIdComponent } from './search-id/search-id.component';
import { SearchTitleComponent } from './search-title/search-title.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BlogAddComponent } from './blog-add/blog-add.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { BlogDeleteComponent } from './blog-delete/blog-delete.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { CommentAddComponent } from './comment-add/comment-add.component';
import { CommentViewComponent } from './comment-view/comment-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyProfileComponent,
    UserProfileComponent,
    SearchIdComponent,
    SearchTitleComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    NavbarComponent,
    BlogAddComponent,
    BlogEditComponent,
    BlogDeleteComponent,
    UserDeleteComponent,
    UserEditComponent,
    CommentAddComponent,
    CommentViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
