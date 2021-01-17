import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import { ServiceComponent } from './service/service.component';
import { SavComponent } from './sav/sav.component';
import { PartenaireComponent } from './partenaire/partenaire.component';
import {HttpClientModule} from '@angular/common/http';
import { LienUtilsComponent } from './lien-utils/lien-utils.component';
import { UnderconstructionComponent } from './underconstruction/underconstruction.component';
import {AgmCoreModule} from '@agm/core';
import { CarriereComponent } from './carriere/carriere.component';
import { EventsComponent } from './events/events.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    ServiceComponent,
    SavComponent,
    PartenaireComponent,
    LienUtilsComponent,
    UnderconstructionComponent,
    CarriereComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC6AGgACNTCt1GcBYWV39bz6LkYaG5ln-k'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
