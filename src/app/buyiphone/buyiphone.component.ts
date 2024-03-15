import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buyiphone',
  templateUrl: './buyiphone.component.html',
  styleUrls: ['./buyiphone.component.scss']
})
export class BuyiphoneComponent {

  
  constructor(private router: Router) { }


  navigateToSecond() {
    this.router.navigate(['/buyphone']); // Navigate to the second component
  }


}
