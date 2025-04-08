import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RoomService } from '../../services/room.service';
import { Route, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginObj: any = {
    'phone': '',
    'password': '',
  };

  constructor(private roomSerive: RoomService, private router: Router) {}

  onLogin() {
    this.roomSerive.login(this.loginObj).subscribe((res:any)=>{
      if(res.result){
        localStorage.setItem('hotelUser', JSON.stringify(res.data))
        this.router.navigateByUrl('/dashboard')
      }else{
        alert('Check User Credientials')
      }
    });
  }
}
