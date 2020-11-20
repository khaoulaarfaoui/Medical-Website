import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    { path: 'home',             component: HomeComponent },
    { path: 'service',     component: ProfileComponent },
    { path: 'sav',           component: SignupComponent },
    { path: 'partenaire',          component: LandingComponent },
    { path: 'contact',          component: LoginComponent },
    { path: '', component: HomeComponent  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule
  ],
})
export class AppRoutingModule { }
