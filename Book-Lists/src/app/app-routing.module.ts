import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
//import { BookListComponent } from './components/book-list/book-list.component';
//import { SearchComponent } from './components/search/search.component';
import { SearchComponent } from './ui/search/search.component';
import { LoginComponent } from './security/login/login.component';
import { SignupComponent } from './security/signup/signup.component';
import { AuthGuardService } from './service/auth-guard.service';
import { AllBooksComponent } from './ui/all-books/all-books.component';
import { UserListsComponent } from './ui/user-lists/user-lists.component';

const routes: Routes = [
  {path: 'books', component: AllBooksComponent, canActivate:[AuthGuardService]},
  {path: '', redirectTo: 'books', pathMatch: 'full'},
  {path: 'userlists', component: UserListsComponent, canActivate:[AuthGuardService]},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'search/:keyword', component: SearchComponent, canActivate:[AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
