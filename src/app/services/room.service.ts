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
    console.log(obj);
    
    return this.http.post(this.apiEndPoint+'/Login',obj, {});
  }
}
