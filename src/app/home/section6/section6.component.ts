import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../main.service';
import {Contact}from './contact';

@Component({
  selector: 'app-section6',
  templateUrl: './section6.component.html',
  styleUrls: ['./section6.component.css']
})
export class Section6Component implements OnInit {

  title = "לסיכום, למי מיועד קורס זה"
  p1= "לחסרי רקע לחלוטין שרוצים לבנות אתר מקצועי ויפה"
  p2 = "סטודנטים עם קצת ידע  שנאבקים בהקמת אתר נהדר"
  p3 = "מעצבים שרוצים להרחיב את המיומנות שלהם "
  constructor(private mainService:MainService) { }

  contact:Contact ={} as Contact;

  ngOnInit() {
  }
  sendDetails(){
    this.contact.fullname=this.contact.fullname.trim();
    this.contact.email=this.contact.email.trim();
    this.contact.phone=this.contact.phone.trim();
    if(this.contact.email.length<=0 || this.contact.phone.length<=0 || this.contact.fullname.length<=0)
    {
      alert("אנא מ לא את כל הפרטים")
      return
    }    
    this.contact.message = "landing page css august 2020"
    this.mainService.addContact(this.contact).
    subscribe(data=>{
       window.confirm("תודה, נחזור אליך בהקדם");
       this.contact.fullname="";
       this.contact.phone="";
       this.contact.email="";
       this.contact.message="";
       window.location.href = ("https://appschool.co.il/course/5ef0bdaba4dce500177a2b0f")
    });
  }
  sendWhatsApp(){
    this.mainService.sendWhatsApp();
  }



}
