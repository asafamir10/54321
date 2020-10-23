import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.css']
})
export class Section1Component implements OnInit {
  title = 'css-land-page';
  titles = ["בנה אתרי אנטרנט אמיתיים", "רספונסיביים עם html5 ו css3"]
  subtitles = ["לומדים און ליין מהבית עיצוב אתרים + HTML5 ו- CSS3", "שלב אחר שלב מאפס ללא רקע קודם", "כולל פרויקט ענק"]
  w = `<a href="https://web.whatsapp.com/send?text=www.google.com"
  data-text="Take a look at this awesome website:" 
  class="wa_btn wa_btn_s" style="display:none">Share1</a>
  `
  constructor(private mainService:MainService) { }

  ngOnInit() {
  }
  sendWhatsApp(){
    this.mainService.sendWhatsApp();
  }


}
