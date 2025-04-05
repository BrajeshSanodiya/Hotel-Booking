import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RoomService } from '../../services/room.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginObj: any = {
    'phone': 'BKSano',
    'password': 'rajesh@123',
  };

  constructor(private roomSerive: RoomService) {}

  onLogin() {
    this.roomSerive.login(this.loginObj).subscribe((result) => {
      console.log(result);
    });
  }
}
