import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {


  constructor(private router: Router) { }


  navigateToSecond() {
    this.router.navigate(['/signup']); // Navigate to the second component
  }

  title  = 'Login here';
  
  savedata()
  {
    console.log("working the buttion");
  }

  userLogin(item:any)
  {
    console.log(item);
  }

}
