import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../modules/reservation';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {

  public reservationList:Reservation[] = []

  constructor(private reservationService:ReservationService){
  }

  deleteItem(id:string){
    this.reservationService.deleteReservation(id)
  }
  ngOnInit(){
    this.reservationList = this.reservationService.getAllReservation()
    console.log(this.reservationList)
  }
}
