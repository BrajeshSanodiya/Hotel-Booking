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

  getAllUsers(){
    return this.http.get(this.apiEndPoint+'/GetAllUsers')
  }

  saveUpdateUser(obj:any){
    return this.http.post(this.apiEndPoint+'/AddUpdateUser',obj)
  }

  deleteUser(id:any){
    console.log(this.apiEndPoint+'/DeleteUserByUserId?userId='+id);
    
    return this.http.delete(this.apiEndPoint+'/DeleteUserByUserId?userId='+id)
  }

  getAllCustomer(){
    return this.http.get(this.apiEndPoint+'/GetAllCustomers')
  }

  saveUpdateCustomer(obj:any){
    return this.http.post(this.apiEndPoint+'/AddUpdateCustomer',obj)
  }

  deleteCustomer(id:any){
    return this.http.delete(this.apiEndPoint+'/DeleteCustomerByCustomerId?custId='+id)
  }


//https://freeapi.miniprojectideas.com/api/HotelBookingGetBookingsByMonth?month=12

  GetBookingsByMonth(month: number) {
    return this.http.get(this.apiEndPoint + '/GetBookingsByMonth?month='+month)
  } 

  createBooking(obj: any) {
    return this.http.post(this.apiEndPoint + '/bookroom', obj);
  }

}
