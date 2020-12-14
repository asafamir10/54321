import { Component, OnInit, Inject, Input } from '@angular/core';
import { MainService } from '../main.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
export interface DialogData {
  myHtml: string;
  title: string;
  result:string;
}

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.css']
})
export class Section2Component implements OnInit {
  myHtml: string;
  title= "שיעור מספר 1"
  result="result"
  constructor(private mainService:MainService,
    public dialog: MatDialog
    ) { }

  ngOnInit() {
    this.myHtml = `
    <h1>מטלה מספר 1 </h1>
    <div>
        <ul>
            <li>
                צרו עולם חדש במצב survival ורמת קושי peaceful, ושנו לו את השם
            </li>
            <li>
                תרגלו הליכה וקפיצה בעולם עם החיצים ומקש הרווח
            </li>
            <li>
                תרגלו תקיפת חיות ,הריסת אדמה וחציבת עץ
            </li>
            <li>
                הציבו את הבלוקים שהשגתם שלב קודם על הריצפה
            </li>
            <li>
                צרו עולם חדש במצב creative ורמת קושי easy, ושנו לו את השם
            </li>
            <li>
                תרגלו הליכה, קפיצה ולעוף בעולם עם החיצים ומקש הרווח
            </li>
            <li>
                תרגלו הריסה של בלוקים
            </li>
            <li>
                תרגלו בהצבת בלוקים מהמלאי בעזרת המקש E במקלדת
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
      data: {title: "תרגיל מספר 1", myHtml: this.myHtml, result:this.result}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.result = result;
    });
  }



}
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog implements OnInit {
  dilaogHtml="";
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

    ngOnInit() {
    }
  
  onNoClick(): void {
    this.dialogRef.close();
  }
}
  
  


