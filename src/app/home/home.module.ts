import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterLink, RouterModule } from '@angular/router';
import { NavbarModule } from '../navbar/navbar.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterModule,
    NavbarModule
  ]
})
export class HomeModule { }
