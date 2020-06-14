import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import {Router} from '@angular/router'
import {FormControl,FormGroup} from '@angular/forms'


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {
  errorMessage;
  constructor(private authService: AuthenticationService, private router:Router) { }

  loginForm = new FormGroup({
    inputEmail : new FormControl(''),
    inputPassword : new FormControl('')
  })
async onSubmitClick(event){
  event.preventDefault();
  console.log(this.loginForm.value)
 
  try{
    await this.authService.signUpUser(this.loginForm.value)
    this.router.navigateByUrl('/sign-in')
  }catch(error){
    console.log(error);
    this.errorMessage = error.message
  }
}
rememberMeClick(event) {
  console.log('Remember me button clicked', event)
}
  ngOnInit(): void {
  }

}
