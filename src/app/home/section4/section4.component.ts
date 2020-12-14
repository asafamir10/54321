import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogOverviewExampleDialog } from '../section2/section2.component';

@Component({
  selector: 'app-section4',
  templateUrl: './section4.component.html',
  styleUrls: ['./section4.component.css']
})
export class Section4Component implements OnInit {

  myHtml: string;
  result: string="result";
  title= "שיעור מספר 3"

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
      this.result = result;//
    });
  }


}
