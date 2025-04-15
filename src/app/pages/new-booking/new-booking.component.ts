import { Component } from '@angular/core';
import { RoomService } from '../../services/room.service';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-new-booking',
  imports: [FormsModule, NgFor],
  templateUrl: './new-booking.component.html',
  styleUrl: './new-booking.component.css'
})
export class NewBookingComponent {

  bookingObj: any  = {
    "name": "",
    "mobileNo": "",
    "email": "",
    "aadharNo": "",
    "city": "",
    "address": "",
    "bookingId": 0,
    "roomId": 0,
    "customerId": 0,
    "bookingFromDate": "",
    "bookingToDate": "",
    "createdDate": new Date(),
    "bookingRate": 0,
    "naration": "",
    "createdBy": 0,
    "hotelBookingDetails": [
      
    ]
  };

  guestObj: any = {
    "bookingDetailId": 0,
    "bookingId": 0,
    "customerName": "",
    "aadharCardNo": ""
  }
  roomList:any[]=[];

  constructor(private roomSrv: RoomService) {

  }
  ngOnInit(): void {
      this.loadRooms();
  }

  loadRooms() {
    this.roomSrv.getAllRoom().subscribe((res:any)=>{
      this.roomList = res.data;
    })
  }

  addGuest() {
    const obj = JSON.stringify(this.guestObj);
    const parserobj = JSON.parse(obj);
    this.bookingObj.hotelBookingDetails.unshift(parserobj);
  }

  removeGuest(index:number) {
    this.bookingObj.hotelBookingDetails.splice(index,1)
  }

  onSaveBooking() {
    this.bookingObj.roomId=parseInt(this.bookingObj.roomId)

    const localData=localStorage.getItem('hotelUser')
    if(localData!=null){
      this.bookingObj.createdBy=JSON.parse(localData).userId
    }

    this.roomSrv.createBooking(this.bookingObj).subscribe((res: any) => {
      if(res.result) {
        alert('Booking Created')
      } else {
        alert(res.message)
      }
    })
  }
}