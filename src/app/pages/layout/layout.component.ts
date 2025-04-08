import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet,RouterModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  loggedUserData:any

  constructor(private router:Router){
    const localData=localStorage.getItem('hotelUser')
    if(localData!=null){
      this.loggedUserData=JSON.parse(localData)
    }
  }

  onLogOff(){
    localStorage.removeItem('hotelUser')
    this.loggedUserData=undefined
    this.router.navigateByUrl('/login')
  }

}
