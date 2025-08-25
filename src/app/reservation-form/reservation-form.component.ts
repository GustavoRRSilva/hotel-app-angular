import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../modules/reservation';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {

  reservationForm:FormGroup = new FormGroup({})


  constructor(
    private formBuilder:FormBuilder,
    private reservationService:ReservationService,
    private router:Router,
    private activatedRoute:ActivatedRoute) {
    this.formBuilder = formBuilder;
    this.reservationService = reservationService;
    this.router = router;
    this.activatedRoute = activatedRoute
  }

  ngOnInit(){
    this.reservationForm = this.formBuilder.group({
      checkIn:['',Validators.required],
      checkOut:['',Validators.required],
      guestName:['',Validators.required],
      guestEmail:['',[Validators.required,Validators.email]],
      roomNumber:['',Validators.required],
    })

    let id = this.activatedRoute.snapshot.paramMap.get('id')
    console.log(id)
    if(id){
      this.reservationService.getReservation(id).subscribe(reservation =>{
        if(reservation)
          this.reservationForm.patchValue(reservation)
      })


    }
  }

  onSubmit(){
    if(this.reservationForm.valid){
      let reservation:Reservation = this.reservationForm.value;

       let id = this.activatedRoute.snapshot.paramMap.get('id')

       if(id){
         this.reservationService.editReservation(id,reservation).subscribe(()=>{
          alert("sent to edit")
         })
       }else{
         this.reservationService.addReservation(reservation).subscribe(()=>{
          alert("sent to create")
        });
       }

      this.router.navigate(["/list"])
    }
  }
}
