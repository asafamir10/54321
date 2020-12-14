import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { HeaderComponent } from './home/header/header.component';
import { Section4Component } from './home/section4/section4.component';
import { Section5Component } from './home/section5/section5.component';
import { FooterComponent } from './home/footer/footer.component';
import { Section1Component } from './home/section1/section1.component';
import { Section6Component } from './home/section6/section6.component';
import { Lesson1Component } from './home/lesson1/lesson1.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { Section2Component, DialogOverviewExampleDialog } from './home/section2/section2.component';
import { Section3Component } from './home/section3/section3.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Section2Component,
    Section3Component,
    Section4Component,
    Section5Component,
    FooterComponent,
    Section1Component,
    Section6Component,
    Lesson1Component,
    DialogOverviewExampleDialog

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,



  ],
  entryComponents: [
    DialogOverviewExampleDialog
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
