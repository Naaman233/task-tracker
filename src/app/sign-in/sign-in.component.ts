import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  errorMessage;

  constructor(private authService: AuthenticationService) {

  }


  async onSubmitClick(event) {
    event.preventDefault()
    console.log('button clicked')
    try {
      await this.authService.signInUser('test@ex.com', '1234')
    } catch (error) {
      this.errorMessage = error.message
    }
  }
  rememberMeClick(event) {
    console.log('Remember me button clicked', event)
  }


  ngOnInit(): void {
  }

}
