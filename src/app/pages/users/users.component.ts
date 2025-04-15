import { Component, NgModule } from '@angular/core';
import { RoomService } from '../../services/room.service';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users',
  imports: [NgFor, FormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  constructor(private roomService: RoomService) {}

  userData: any[] = [];

  userObj = {
    userId: 0,
    userName: '',
    password: '',
    role: ''
  };

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.roomService.getAllUsers().subscribe((res: any) => {
      if (res.result) {
        this.userData = res.data;
        console.log(this.userData);
      }
    });
  }

  addNewUser() {
    this.userData.unshift(this.userObj);
  }

  saveUserData() {
    this.roomService.saveUpdateUser(this.userObj).subscribe((res: any) => {
      if (res.result) {
        alert('User Updated Successfully');
        this.getAllUsers();
      } else {
        alert(res.message)
      }
    });
  }

  editDelete(user: any) {
    const strObj=JSON.stringify(user);

   this.userObj=JSON.parse(strObj);
  }

  userDelete(id: any) {
    this.roomService.deleteUser(id).subscribe((res: any) => {
      if (res.result) {
        this.getAllUsers();
        alert('User Deleted Successfully');
      } else {
        alert(res.message);
      }
    });
  }
}
