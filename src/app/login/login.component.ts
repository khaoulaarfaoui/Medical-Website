/// <reference types="@types/googlemaps" />

import {MapsAPILoader} from '@agm/core';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    title = 'My first AGM project';
    lat = 36.813190;
    lng = 10.173100;
  focus;
  focus1;
  focus2;
  focus3;
  focus4;
  focus5;
  focus6;
   etb = 'Etablissement';
   et = this.etb.bold();
   fct = 'Fonction: ';
   ft = this.fct.bold();
   adr = 'Adresse';
   ad = this.adr.bold();
   suj = 'Sujet: ';
   sj = this.suj.bold();
   sent = false;
    coordinates;
  constructor(private http: HttpClient, private mapsAPILoader: MapsAPILoader) { }

  ngOnInit() {
  }
/*
  OnSubmit(contactForm: NgForm) {
    if (contactForm.valid) {
      const email = contactForm.value;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post('https://formspree.io/f/mleolvql',
          { name: email.name, replyto: email.email, message: email.msg },
          { 'headers': headers }).subscribe(
          response => {
            console.log(response);
          }
      );
    }
  }
*/
  onSubmit(contactForm: NgForm) {
    if (contactForm.valid) {
      const email = contactForm.value;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post('https://formspree.io/f/mwkwqjqy',
          { Nom : email.name, Email: email.email, Etablissement: email.etablissement,
            Fonction: email.fonction, Addresse: email.addresse,  Message: email.messages
          },
          { 'headers': headers }).subscribe(
          response => {
            console.log(response);
          }
      );
   this.sent = true;
    }
  }
  reset(contactForm: NgForm) {
    contactForm.reset();
  }
}
