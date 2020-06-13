import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import{Router} from '@angular/router'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})


export class SignUpComponent implements OnInit {
  errorMessage;
  constructor(private authService: AuthenticationService, private router:Router) { }
async onSubmitClick(event){
  event.preventDefault();
  console.log('button clicked')
  try{
    await this.authService.signUpUser('test@test1.com','123456789')
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
