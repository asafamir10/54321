import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Contact}from '../home/section6/contact'
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  constructor(private http: HttpClient) { }

  contact:Contact ={} as Contact;
  private url = "https://appschool-server-real.herokuapp.com/front/contacts";  // URL to web api

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      alert(error);
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  

  sendWhatsApp(){
    var innerWidth = window.innerWidth;
    //alert(innerWidth);
    if(innerWidth>550){
    window.location.href = "https://web.whatsapp.com/send?phone='+972522586973'&text=אני רוצה פרטים על קורס css ו html5";
    }
    else{
    window.location.href="https://api.whatsapp.com/send?phone=+972522586973&text=אני רוצה פרטים על קורס css ו html5"; 
    }
  }

  addContact (contact): Observable<Contact> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    var item = {
      item:{
      fullname:contact.fullname, 
      phone:contact.phone, 
      email:contact.email,
      message:contact.message}
      };
      console.log(item);
      return this.http.post<Contact>(this.url + '/add', item, httpOptions).pipe(
      catchError(this.handleError<Contact>('addContact'))
    
  )};

  
}
