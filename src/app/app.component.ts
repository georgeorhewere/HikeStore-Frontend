import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hike Store';

  constructor(private router: Router){


  }


  changeRoute(urlRoute:string){
    console.log("clicked " + urlRoute)
    this.router.navigateByUrl(urlRoute);
  }
}
