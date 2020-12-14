import { Component, OnInit, Inject } from '@angular/core';
import { MainService } from '../main.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogOverviewExampleDialog } from '../section2/section2.component';

@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.css']
})
export class Section3Component implements OnInit {
  myHtml: string;
  result: string="result";
  title= "שיעור מספר 2"


  
  constructor(private mainService:MainService,
    public dialog: MatDialog
    ) { }

  ngOnInit() {
    this.myHtml = `
    <h1>מטלה מספר 2 </h1>
    <div>
        <ul>
            <li>
            צרו מבנה עם דלת וחלון, כמה שיותר יצירתי יותר טוב ☺
            </li>
            <li>
            הוסיפו בתוך המבנה לוח עם שאלה לבחירתכם
            </li>
        </ul>
    </div>
    `
    }
  sendWhatsApp(){
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '50%',
      data: {title: "תרגיל מספר 2", myHtml: this.myHtml, result:this.result}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.result = result;
    });
  }
}
