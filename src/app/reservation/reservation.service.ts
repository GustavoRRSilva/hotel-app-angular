import { Injectable } from '@angular/core';
import { Reservation } from '../modules/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private reservations:Reservation[] = []

  addReservation(reservation:Reservation):void {
    this.reservations.push(reservation)
  }

  getAllReservation():Reservation[]{
    return this.reservations
  }

  getReservation(id:string):Reservation | undefined {
   return this.reservations.find((res=>res.id === id))
  }

  deleteReservation(id:string):void {
    let index = this.reservations.findIndex((res=>res.id === id));
    this.reservations.splice(index,1);
  }

  editReservation(reservation:Reservation):void{
    let index = this.reservations.findIndex((res=>res.id === reservation.id));
    this.reservations[index] = reservation;
  }
}
