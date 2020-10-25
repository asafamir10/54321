import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.css']
})
export class Section1Component implements OnInit {
  title = 'css-land-page';
  titles = ["קורס מיינקראפט"]
  subtitles = ["לומדים אנגלית עם מיינקראפט"]
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
