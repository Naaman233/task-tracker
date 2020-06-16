import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import {Router} from '@angular/router'
import {FormControl,FormGroup,AbstractControl, Validators} from '@angular/forms'
import {getValidatorInput} from '../../Validators/validator'



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {
  errorMessage;
  constructor(private authService: AuthenticationService, private router:Router) { }

  firstName = new FormControl('')
  lastName = new FormControl('')
  phoneNumber = new FormControl('')
  inputEmail = new FormControl('')
  inputPassword = new FormControl('')
  confirmPassword = new FormControl('', getValidatorInput(this.inputPassword))

  loginForm = new FormGroup({
    firstName : this.firstName,
    lastName: this.lastName,
    phoneNumber: this.phoneNumber,
    inputEmail : this.inputEmail,
    inputPassword: this.inputPassword,
    confirmPassword: this.confirmPassword
  })

async onSubmitClick(event){
  event.preventDefault();
  console.log(this.loginForm.value)
  if(this.loginForm.invalid){
    //show errors
    this.errorMessage = 'Invalid form '
    return
  }

  this.errorMessage = 'Valid form'
  try{
    await this.authService.signUpUser(this.loginForm.value)
    this.router.navigateByUrl('/sign-in')
  }catch(error){
    console.log(error);
    this.errorMessage = error.message
  }
}

static MatchPassword(AC:AbstractControl){
  const inputPassword = AC.get('inputPassword').value
  const confirmPassword = AC.get('confirmPassword').value
  if(inputPassword != confirmPassword){
    console.log('Incorrect password values')
    AC.get('confirmPassword').setErrors({MatchPassword: true})
  }else{
    console.log('Password match ')
    return null
  }

}



  ngOnInit(): void {
  }

}
