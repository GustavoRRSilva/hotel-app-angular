import { Injectable } from '@angular/core';
import { Reservation } from '../modules/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private reservations:Reservation[] = []

  constructor(){
    let storedReservations = localStorage.getItem("reservations");
    this.reservations = storedReservations ? JSON.parse(storedReservations) : []
  }

  addReservation(reservation:Reservation):void {
    let id = Date.now()
    reservation.id = id.toString()
    this.reservations.push(reservation)
    localStorage.setItem("reservations",JSON.stringify(this.reservations))
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
    localStorage.setItem("reservations",JSON.stringify(this.reservations))
  }

  editReservation(id:string,reservation:Reservation):void{
    let index = this.reservations.findIndex((res=>res.id === id));
    reservation.id = id
    this.reservations[index] = reservation;
    localStorage.setItem("reservations",JSON.stringify(this.reservations))
  }
}
