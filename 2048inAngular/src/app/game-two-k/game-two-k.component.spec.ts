import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GameTwoKComponent } from './game-two-k.component';

fdescribe('GameTwoKComponent', () => {
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
    component.fields = [0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a 4x4 field' , () => {
    expect(compiled.querySelectorAll('.field').length).toEqual(16);
  });

  // zwei x 2 im feld anzeigen
  it('should create the number two two times', () => {
    expect(component.fields[1]).toEqual(2);
    expect(component.fields[6]).toEqual(2);
  });

  // den Anfangszustand nach unten verschieben
  it('should align the numbers on bottom', () => {
    component.moveDown();
    expect(component.fields[13]).toEqual(2);
    expect(component.fields[14]).toEqual(2);
  });

  // den Anfangszustand nach oben verschieben
  it('should align the numbers on top', () => {
    component.moveUp();
    expect(component.fields[1]).toEqual(2);
    expect(component.fields[2]).toEqual(2);
  });

  // den Anfangszustand nach links verschieben
  it('should align the numbers on left side', () => {
    component.moveLeft();
    expect(component.fields[0]).toEqual(2);
    expect(component.fields[4]).toEqual(2);
  });

  // den Anfangszustand nach rechts verschieben
  it('should align the numbers on right side', () => {
    component.moveRight();
    expect(component.fields[3]).toEqual(2);
    expect(component.fields[7]).toEqual(2);
    expect(component.fields[1]).toEqual(0);
    expect(component.fields[6]).toEqual(0);
  });

  // zwei mal "2" in beliebigen Feldern anzeigen
  it('should be 2x2', () => {
    expect(component.fields.filter(x =>  x === 2).length).toEqual(2);
  });
});

fdescribe('Randomized GameTwoKComponent', () => {
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
  it('should be 2x2', () => {
    expect(component.fields.filter(x =>  x === 2).length).toEqual(2);
  });
});
