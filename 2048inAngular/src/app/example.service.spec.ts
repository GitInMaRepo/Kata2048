import { TestBed, inject, tick } from '@angular/core/testing';

import { ExampleService } from './example.service';

describe('ExampleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExampleService]
    });
  });

  xit('should be created', inject([ExampleService], (service: ExampleService) => {
    expect(service).toBeTruthy();
  }));

  xit('should return hello', inject([ExampleService], (service: ExampleService) => {
    expect(service.sayHello()).toBe('Hello');
  }));

  xit('should retrun hello within its observable', inject([ExampleService],
    (service: ExampleService, done: DoneFn) => {
    service.receiveHelloFromMe().subscribe(val => {
      expect(val).toBe('Hear me say hello!');
      done();
    });
  }));
});
