import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import {Router} from '@angular/router'
import {FormControl,FormGroup,AbstractControl, Validators} from '@angular/forms'
import {getValidatorInput, getValidationMsg, VALIDATION_IDS} from '../../Validators/Validator'
import {MatDialog} from '@angular/material/dialog'




@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {
  loading = false 
  errorMessage;
  constructor(private authService: AuthenticationService, private router:Router) { }


  inputEmail = new FormControl('', [Validators.required, Validators.email])
  inputPassword = new FormControl('', [Validators.required])
  inputConfirmedPassword = new FormControl('', getValidatorInput(this.inputPassword))

  loginForm = new FormGroup({

    inputEmail : this.inputEmail,
    inputPassword: this.inputPassword,
    inputConfirmedPassword: this.inputConfirmedPassword
  })


  get inputEmailErrorMsg() {
    if(this.inputEmail.hasError('require')){
    return getValidationMsg('Email', VALIDATION_IDS.required);
    }else {
      return 'Invalid email'
    }
  }

  get inputPasswordErrorMsg(){
      if(this.inputPassword.hasError('require')){
        return getValidationMsg('Password', VALIDATION_IDS.required)
        
      }else{
        return 'Invalid password'
      }
    
  }

async onSubmitClick(event){
  event.preventDefault(); 
  console.log(this.loginForm.value)
  if(this.loginForm.invalid){
    this.errorMessage = 'Invalid form '
    return
  }

  this.errorMessage = 'Valid form'
  
  try{
    this.loading = true
    await this.authService.signUpUser(this.loginForm.value)
    this.router.navigateByUrl('/sign-in')
  }catch(error){
    console.log(error);
    this.errorMessage = error.message
  }
}
  ngOnInit(): void {}
}
