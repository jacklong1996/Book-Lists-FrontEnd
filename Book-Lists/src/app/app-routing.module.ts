import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list.component';
import { LoginComponent } from './security/login/login.component';
import { SignupComponent } from './security/signup/signup.component';
import { AllBooksComponent } from './ui/all-books/all-books.component';
import { UserListsComponent } from './ui/user-lists/user-lists.component';

const routes: Routes = [
  {path: 'search/:keyword', component: BookListComponent},
  {path: 'books', component: AllBooksComponent},
  {path: '', redirectTo: 'books', pathMatch: 'full'},
  {path: 'userlists', component: UserListsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
