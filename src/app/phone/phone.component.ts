import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss']
})
export class PhoneComponent {

  handleClick()
  {
    console.log("hii ")
  }

  constructor(private router: Router) { }


  navigateToSecond() {
    this.router.navigate(['/buyiphone']); // Navigate to the second component
  }

  // Method to trigger an alert
  showAlert() {
   // alert('Div clicked!'); // Displaying an alert
   console.log("working");

  }



  

}
