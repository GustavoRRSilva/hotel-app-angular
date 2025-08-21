import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationListComponent } from '../reservation-list/reservation-list.component';
import { ReservationFormComponent } from '../reservation-form/reservation-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavbarModule } from '../navbar/navbar.module';


@NgModule({
  declarations: [
    ReservationListComponent,
    ReservationFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NavbarModule
  ]
})
export class ReservationModule { }
