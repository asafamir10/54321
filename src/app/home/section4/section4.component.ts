import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-section4',
  templateUrl: './section4.component.html',
  styleUrls: ['./section4.component.css']
})
export class Section4Component implements OnInit {

  title="בואו נגלה אם הקורס הזה בשבילכם"
  subtitle = "זה מתאים לחלוטין אם"
  p1 = "אין לך רקע בכלל בכתיבת קוד"
  p2 = "אתה כבר מכיר html ו css אך נאבק להקים אתר שלם שנראה טוב"
  p3 = "אתה מעצב או גרפיקאי ורוצה להרחיב כישוריך, מכיון שכל עמיתך יודעים לקודד html ו css"
  
  pfinal2 = ",אם אתה בונה את האתרים היפים ביותר בעולם ,CSS3 -ו HTML5 -בעיקרון, אם אתה מאסטר ב .אל תשתתף בקורס. אבל אם אתה אחד מהשלושה אז אתה צריך לקחת את הקורס היום"
  pfinal = "אם אתה אחד מהשלושה אז אתה צריך לקחת את הקורס"

  constructor(private mainService:MainService) { }

  ngOnInit() {
  }
  sendWhatsApp(){
    this.mainService.sendWhatsApp();
  }


}
