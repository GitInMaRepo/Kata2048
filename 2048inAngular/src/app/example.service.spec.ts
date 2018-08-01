import { TestBed, inject, tick } from '@angular/core/testing';

import { ExampleService } from './example.service';

describe('ExampleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExampleService]
    });
  });

  it('should be created', inject([ExampleService], (service: ExampleService) => {
    expect(service).toBeTruthy();
  }));

  it('should return hello', inject([ExampleService], (service: ExampleService) => {
    expect(service.sayHello()).toBe('Hello');
  }));

  it('should retrun hello within its observable', inject([ExampleService],
    (service: ExampleService, done: DoneFn) => {
    service.receiveHelloFromMe().subscribe(val => {
      expect(val).toBe('Hear me say hello!');
      done();
    });
  }));
});
