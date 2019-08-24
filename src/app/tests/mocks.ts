import { NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';

export class Mocks {
}

export class TestRouter{
    public url = new NavigationEnd(0, 'http://localhost:4200/login', 'http://localhost:4200/login');
    public events = new Observable(observer => {
      observer.next(this.url);
      observer.complete();
    });
    public routerState:[]
  }

  export class MockActivatedRoute{
    public url = new NavigationEnd(0, 'http://localhost:4200/login', 'http://localhost:4200/login');
    public events = new Observable(observer => {
      observer.next(this.url);
      observer.complete();
    });
    public routerState:[]
  }
