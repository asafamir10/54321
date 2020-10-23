import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  myFunction(){
    var x = document.getElementById("links");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  ngOnInit() {
    var innerWidth = window.innerWidth;
    //alert(innerWidth)
    if(innerWidth<=550){
      var x = document.getElementById("links");
      x.style.display = "none";
    }

  }

}
