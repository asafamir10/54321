import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-section5',
  templateUrl: './section5.component.html',
  styleUrls: ['./section5.component.css']
})
export class Section5Component implements OnInit {

  title="עכשיו תורכם להחליט"
  subtitle = "זה מה שאתם מקבלים"
  p1= "גישה לשנה ל 135 מערכי שיעור מסודרים למדו בקצב שלכם, מתי שתרצו"
  p2= "קוד הורדה לכל פרויקט, נקודת התחלה מעולה לפרויקט שלכם"
  p3 = "מצגות מסודרות לכל נושא"
  p4 = "תרגול מסודר עם פתרונות מלאים"
  pfinal = "לחץ על שלח הודעה וניצור עמך קשר בוואסטאפפ"
  
  constructor(private mainService:MainService) { }

  ngOnInit() {
  }
  sendWhatsApp(){
    this.mainService.sendWhatsApp();
  }


}
