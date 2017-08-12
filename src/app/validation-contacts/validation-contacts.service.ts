import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";

const host = 'http://dbapi.io/db/coll';

@Injectable()
export class ValidationContactsService {

  constructor( private http: Http) {
  }

  sendContactToServer(formContact: any): Observable<Response>{
    let name =  formContact.nomeCompleto;
    let userEmail = formContact.contactModel.userEmail;
    let userMessage = formContact.contactModel.message;

    return this.http.post(host, {email: userEmail,  from: name, message: userMessage});
  }
}
