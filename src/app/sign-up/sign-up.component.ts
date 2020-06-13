import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  errorMessage;
  constructor(private authService: AuthenticationService) { }
async onSubmitClick(event){
  event.preventDefault();
  console.log('button clicked')
  try{
    await this.authService.signUpUser('makafui.naaman@eggseed.com','123456789')
    
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
