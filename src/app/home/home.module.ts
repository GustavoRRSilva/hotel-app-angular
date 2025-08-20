import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponenetModule } from '../componenet/componenet.module';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ComponenetModule
  ]
})
export class HomeModule { }
