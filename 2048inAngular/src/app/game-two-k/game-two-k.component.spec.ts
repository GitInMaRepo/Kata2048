import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GameTwoKComponent } from './game-two-k.component';
import { By } from '@angular/platform-browser';

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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a 4x4 field' , () => {
    expect(compiled.querySelectorAll('.field').length).toEqual(16);
  });

  // zwei x 2 im feld anzeigen
  it('should create the number two two times', () => {
    component.startGame();
    expect(component.fields.filter(x =>  x === 2).length).toEqual(2);
  });

  // den Anfangszustand nach unten verschieben
  it('should align the numbers on bottom', () => {
    component.startGame();
    component.moveDown();
    expect(component.fields[13]).toEqual(2);
    expect(component.fields[14]).toEqual(2);
  });


    // den Anfangszustand nach oben verschieben
    it('should align the numbers on top', () => {
      component.startGame();
      component.moveUp();
      expect(component.fields[1]).toEqual(2);
      expect(component.fields[2]).toEqual(2);
    });
      // den Anfangszustand nach links verschieben
      it('should align the numbers on left side', () => {
        component.startGame();
        component.moveLeft();
        expect(component.fields[0]).toEqual(2);
        expect(component.fields[4]).toEqual(2);
      });
        // den Anfangszustand nach rechts verschieben
        it('should align the numbers on right side', () => {
          component.startGame();
          component.moveRight();
          expect(component.fields[3]).toEqual(2);
          expect(component.fields[7]).toEqual(2);
          expect(component.fields[1]).toEqual(0);
          expect(component.fields[6]).toEqual(0);
        });
});
