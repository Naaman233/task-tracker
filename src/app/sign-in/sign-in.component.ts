import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthenticationService } from '../authentication.service'
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  errorMessage;
  loading = false
  constructor(private authService: AuthenticationService , private router : Router) {

  }
    inputEmail = new FormControl('')
    inputPassword = new FormControl('',
    [Validators.required,
    Validators.minLength(4)])
    loginForm = new FormGroup({
      
        inputEmail: this.inputEmail,
        inputPassword: this.inputPassword
    })

  // async onSubmitClick(event) {
  //   event.preventDefault()
  //   console.log('button clicked')
  //   try {
  //     await this.authService.signInUser('test@ex.com', '1234')
  //   } catch (error) {
  //     this.errorMessage = error.message
  //   }
  // }
      async onSubmitClick(event){
        event.preventDefault()
        
        if(this.loginForm.invalid){
            this.errorMessage = 'Invalid Login Form'
            console.log('Invalid Login request')
        }
        this.errorMessage = 'Valid Login Form'
        try{
          this.inputEmail.value === 'makafui17@gmail' && this.inputPassword.value === '1234'
          console.log('Action is live!')
        }catch(err){
          console.log('login error')
        }
      }

  rememberMeClick(event) {
    console.log('Remember me button clicked', event)
  }


  ngOnInit(): void {
  }

}
