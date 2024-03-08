import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';



@NgModule({
  declarations: [
    ForgetpasswordComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ForgetpasswordComponent
    

  ]
})
export class AuthModule { }
