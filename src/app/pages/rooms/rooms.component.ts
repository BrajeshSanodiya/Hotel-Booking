import { Component } from '@angular/core';
import { RoomService } from '../../services/room.service';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rooms',
  imports: [NgFor,NgIf, FormsModule],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent{
  constructor(private roomService:RoomService){}

  roomData:any[]=[]

  ngOnInit(){
    this.getAllRooms()
  }

  getAllRooms(){
    this.roomService.getAllRoom().subscribe((res:any)=>{
      if(res.result){
       this.roomData=res.data
       console.log(this.roomData);
       
      }
    })
  }

  addNewRow(){
   const roomObj={
      "roomId": 0,
      "roomName": "",
      "isAcAvailable": false,
      "roomCapacity": 0,
      "isActive": false,
      "roomTariff": 0,
      "extensionNo": "0"
  }
    this.roomData.unshift(roomObj);
  }

  saveRoomData(){
    this.roomService.saveUpdateRoom(this.roomData).subscribe((res:any)=>{
      if(res.result){
        alert('Data Updated Successfully')
      }else{
        alert(res.message)
      }
    });
  }

  roomDelete(id:any){
    this.roomService.deleteRoom(id).subscribe((res:any)=>{
      if(res.result){
        this.getAllRooms()
        alert('Data Deleted Successfully')
      }else{
        alert(res.message)
      }
    });
  }
}
