import { Injectable } from '@angular/core';
import { Reservation } from '../modules/reservation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private url = "http://localhost:3001"
  private reservations:Reservation[] = []

  constructor(private httpClient:HttpClient){

  }

  addReservation(reservation:Reservation):Observable<void> {
    let id = Date.now()
    reservation.id = id.toString()

    return this.httpClient.post<void>(this.url + "/reservation", reservation)
  }

  getAllReservation():Observable<Reservation[]>{
    return this.httpClient.get<Reservation[]>(this.url + "/reservations")
  }

  getReservation(id:string):Observable<Reservation> {
   return this.httpClient.get<Reservation>(this.url + "/reservation/" + id)
  }

  deleteReservation(id:string):Observable<void> {
   return this.httpClient.delete<void>(this.url + "/reservation/" + id)
  }

  editReservation(id:string,reservation:Reservation):Observable<void>{
    return this.httpClient.put<void>(this.url + "/reservation/" + id, reservation)
  }
}
