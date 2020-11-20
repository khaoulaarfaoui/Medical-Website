import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
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
  constructor(private http: HttpClient) { }

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
      this.http.post('https://formspree.io/f/mleolvql',
          { Nom : email.name, Email: email.email, Etablissement: email.etablissement,
            Fonction: email.fonction, Addresse: email.addresse,  Message: email.messages
          },
          { 'headers': headers }).subscribe(
          response => {
            console.log(response);
          }
      );
    }
  }

  reset(contactForm: NgForm) {
    contactForm.reset();
  }
}
