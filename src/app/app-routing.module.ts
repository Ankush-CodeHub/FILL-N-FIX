import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component'
import { HomepageComponent } from './homepage/homepage.component'

const routes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: 'user-login', component: UserLoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
