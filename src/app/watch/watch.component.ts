import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.scss']
})
export class WatchComponent   {

  constructor(private router: Router) { }
 
  navigateTobuywatch() {
    this.router.navigate(['/buywatch']); // Navigate to the second component
  }

 
 
  
 

}
