import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';


const routes: Routes = [
{path:'', component:SignUpComponent},
{path: 'sign-up', component:SignUpComponent},
{path: 'welcome-page',component: WelcomePageComponent},
{path: 'sign-in', component:SignInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
