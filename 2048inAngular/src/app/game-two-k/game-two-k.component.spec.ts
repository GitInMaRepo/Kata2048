import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameTwoKComponent } from './game-two-k.component';

describe('GameTwoKComponent', () => {
  let component: GameTwoKComponent;
  let fixture: ComponentFixture<GameTwoKComponent>;
let compiled: any;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameTwoKComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameTwoKComponent);
    compiled = fixture.debugElement.nativeElement;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a 4x4 field' , () => {
    expect(compiled.querySelectorAll('.field').length).toEqual(16);
  });
});
