import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.css']
})
export class Section2Component implements OnInit {

  title= "אז הנה בדיוק מה שאנחנו מכסים בקורס"
  p1= "פיתוח קל ונוח למעקב ופיתוח CSS3 -ו HTML5 באינטרנט "
  p2= "5 הצעדים המוכחים בעולם האמיתי מאפס לאתר אינטרנט מלא פונקציונלי"
  p3= "הנחיות וטיפים לשימוש בעיצוב אתרים כדי לגרום לאתר שלך לבלוט "
  p4= "כיצד להשיג ולהשתמש בתמונות, גופנים וסמלים כדי להבהיר את אתר האינטרנט"
  p5= "עיצוב רספונסיבי: ללמוד כיצד ליצור אתרים שעובדים יפה בכל גודל המסך"
  p6= "כיצד לבצע אופטימיזציה של האתר שלך (SEO) לביצועים מהירים טובים למנועי חיפוש "
  paragraphs = [this.p1, this.p2, this.p3, this.p4, this.p5, this.p6]
  cards = [
  "assets/images/code.svg",
  "assets/images/goal.svg",
  "assets/images/sports-and-competition.svg",
  "assets/images/website-design.svg",
  "assets/images/computer.svg",
  "assets/images/rocket.svg"
  ]
  imgSuccess= "assets/images/success-2.svg"
  whats = [
    "מיומנויות מהעולם האמיתי",
    "ספר אלקטרוני ומצגות מסודרות",
    "תרגולים",
    "הנחיות וטיפים לשימוש בעיצוב אתרים כדי לגרום לאתר שלך להיות בולט",
    "הרצאות, קוד הניתנים להורדה",
    "חמשת הצעדים המוכחים, מאפס מוחלט לאתר אינטרנט פונקציונלי ומלא הכולל אופטימיזציה מלאה",
  ]
  //    "פרויקט ענק שילמד את כל מה שצריך לדעת כדי להתחיל בעבודה עם HTML5 ו- CSS3",

  
  constructor(private mainService:MainService) { 

  }

  ngOnInit() {
  }
  sendWhatsApp(){
    this.mainService.sendWhatsApp();
  }

}
