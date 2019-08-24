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

  constructor(private router: Router){     
    
    

  }

getHeader(): string
{

  if(this.router.url.includes("user")){
    return "User Management";
  }

  return "Dashboard";
  
}

  changeRoute(urlRoute:string){
    //console.log("clicked " + urlRoute)
    this.router.navigateByUrl(urlRoute);
  }
}
