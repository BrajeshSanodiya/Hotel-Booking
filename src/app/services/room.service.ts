import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  apiEndPoint= "https://freeapi.miniprojectideas.com/api/HotelBooking"

  constructor(private http:HttpClient) { 

  }

  login(obj:any){
    return this.http.post(this.apiEndPoint+'/Login',obj);
  }

  getAllRoom(){
    return this.http.get(this.apiEndPoint+'/GetAllRooms')
  }

  saveUpdateRoom(obj:any){
    return this.http.post(this.apiEndPoint+'/AddUpdateBulkRooms',obj)
  }

  deleteRoom(id:any){
    return this.http.delete(this.apiEndPoint+'/DeleteRoomByRoomId?roomId='+id)
  }
}
