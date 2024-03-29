import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { PhoneComponent } from './phone/phone.component';
import {AuthModule} from './auth/auth.module';
import { AccessoriesComponent } from './accessories/accessories.component';
import { WatchComponent } from './watch/watch.component';
import { SupportComponent } from './support/support.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BuyiphoneComponent } from './buyiphone/buyiphone.component';
import { BuywatchComponent } from './buywatch/buywatch.component';
import { BuyphoneComponent } from './buyphone/buyphone.component';
import {FormsModule} from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    PhoneComponent,
    AccessoriesComponent,
    WatchComponent,
    SupportComponent,
    BuyiphoneComponent,
    BuywatchComponent,
    BuyphoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AuthModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
