import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SearchComponent } from './pages/search/search.component';
import { RegisterComponent } from './pages/register/register.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ResetPasswordTokenComponent } from './pages/reset-password-token/reset-password-token.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'Login', component:  LoginComponent},
  { path: 'Search', component: SearchComponent},
  { path: 'Register',component: RegisterComponent},
  { path: 'Favorite',component:FavoritesComponent},
  { path: 'ForgotPassword', component:ForgotPasswordComponent},
  {path: 'ResetPasswordToken/:token',component:ResetPasswordTokenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
