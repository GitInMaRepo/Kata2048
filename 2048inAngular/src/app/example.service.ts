import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  constructor() { }

  sayHello(): string {
    return 'Hello';
  }

  receiveHelloFromMe(): Observable<string> {
    return of ('Hear me say hello!');
  }
}
