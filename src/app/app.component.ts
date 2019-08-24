import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hike Store';
  viewHeader:string =""
  isManageUsers:boolean=false;
  isDashboard:boolean=false;

  constructor(private router: Router){     
    
  

  }

  get Title():string{
    return "Dashboard";
  }

getHeader(): string
{ 
  if(this.router.url.includes("user")){
    this.isManageUsers = true;    
    
    return "User Management";
  }else{

  this.isDashboard = true
  this.isManageUsers = false;
  return "Dashboard";
  }  
  
}
private resetFlags(){
  this.isDashboard = this.isManageUsers = false;
}

  changeRoute(urlRoute:string){
    //console.log("clicked " + urlRoute)
    this.router.navigateByUrl(urlRoute);
  }
}
