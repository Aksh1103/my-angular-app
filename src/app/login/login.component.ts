import { Component } from '@angular/core';
import { Router } from '@angular/router';

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


  
  savedata()
  {
    console.log("working the buttion");
  }

}
