import { Component, OnInit, Inject } from '@angular/core';
import { MainService } from '../main.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.css']
})
export class Section2Component implements OnInit {
  animal: string;
  name: string;

  title= "שיעור מספר 1"

  //    "פרויקט ענק שילמד את כל מה שצריך לדעת כדי להתחיל בעבודה עם HTML5 ו- CSS3",

  
  constructor(private mainService:MainService,
    public dialog: MatDialog
    ) { }

  ngOnInit() {
  }
  sendWhatsApp(){
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '50%',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }



}
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  


}




