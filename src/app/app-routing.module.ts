import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    BrowserModule,
    CommonModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
