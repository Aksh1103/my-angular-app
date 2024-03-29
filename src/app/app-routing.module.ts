import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { PhoneComponent } from './phone/phone.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { SupportComponent } from './support/support.component';
import { WatchComponent } from './watch/watch.component';
import { BuyiphoneComponent } from './buyiphone/buyiphone.component';
import { BuywatchComponent } from './buywatch/buywatch.component';
import { BuyphoneComponent } from './buyphone/buyphone.component';

const routes: Routes = [
  {path:'signup',component: SignupComponent},
  {path:'login',component: LoginComponent},
  {path:'phone',component:PhoneComponent},
  {path:'Accessories',component:AccessoriesComponent},
  {path:'Support', component: SupportComponent},
  {path:'Watch',component:WatchComponent},
  {path:'buyiphone',component:BuyiphoneComponent},
  {path:'buywatch',component:BuywatchComponent},
  {path:'buyphone',component:BuyphoneComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
