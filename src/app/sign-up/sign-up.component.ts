import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import {Router} from '@angular/router'
import {FormControl,FormGroup,AbstractControl, Validators} from '@angular/forms'
import {getValidatorInput} from '../../Validators/validator'
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


  inputEmail = new FormControl('')
  inputPassword = new FormControl('')
  inputConfirmedPassword = new FormControl('', getValidatorInput(this.inputPassword))

  loginForm = new FormGroup({

    inputEmail : this.inputEmail,
    inputPassword: this.inputPassword,
    inputConfirmedPassword: this.inputConfirmedPassword
  })

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
