import { Component } from '@angular/core';
import { RoomService } from '../../services/room.service';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer',
  imports: [NgFor, FormsModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {
constructor(private roomService:RoomService){}

  customerData:any[]=[]

  ngOnInit(){
    this.getAllCustomers()
  }

  getAllCustomers(){
    this.roomService.getAllCustomer().subscribe((res:any)=>{
      if(res.result){
       this.customerData=res.data
       console.log(this.customerData);
       
      }
    })
  }

  addNewCustomer(){
   const customerObj={
    "custId": 0,
    "name": "",
    "mobileNo": "",
    "email": "",
    "aadharNo": "",
    "city": "",
    "address": ""
  }
    this.customerData.unshift(customerObj);
  }

  saveCustomerData(){
    this.roomService.saveUpdateCustomer(this.customerData).subscribe((res:any)=>{
      if(res.result){
        alert('Customer Updated Successfully')
      }else{
        alert(res.message)
      }
    });
  }

  customerDelete(id:any){
    this.roomService.deleteCustomer(id).subscribe((res:any)=>{
      if(res.result){
        this.getAllCustomers()
        alert('Customer Deleted Successfully')
      }else{
        alert(res.message)
      }
    });
  }
}
