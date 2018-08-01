import { TestBed, async, tick, fakeAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture2: any;
  let compiled2: any;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        FormsModule
      ]
    }).compileComponents();
    fixture2 = TestBed.createComponent(AppComponent);
    compiled2 = fixture2.debugElement.nativeElement;
  }));

  xit('should create the app', async(() => {
    const app = fixture2.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  xit('should show the readonly text area', async(() => {
    fixture2.detectChanges();
    expect(compiled2.querySelector('.readonly').style.visibility).toBe('visible');
  }));

  xit('should not show the editable text area', async(() => {
    fixture2.detectChanges();
    expect(compiled2.querySelector('.readwrite').style.visibility).toBe('hidden');
  }));

  xit('should show the edit button', async(() => {
    fixture2.detectChanges();
    expect(compiled2.querySelector('.edit').style.visibility).toBeDefined();
  }));

  xit('should not show the readonly text area on edit button click', async(() => {
    fixture2.detectChanges();
    fixture2.componentInstance.onButtonClick();
    fixture2.detectChanges();
    expect(compiled2.querySelector('.readonly').style.visibility).toBe('hidden');
  }));

  it('should show the editable text area on edit button click', async(() => {
    fixture2.componentInstance.onButtonClick();
    fixture2.detectChanges();
    expect(compiled2.querySelector('.readwrite').style.visibility).toBe('visible');
  }));

  it('should not show the save button', async(() => {
    fixture2.detectChanges();
    expect(compiled2.querySelector('.save').style.visibility).toBe('hidden');
  }));

  it('should show the save button on edit button click', async(() => {
    fixture2.componentInstance.onButtonClick();
    fixture2.detectChanges();
    expect(compiled2.querySelector('.save').style.visibility).toBe('visible');
  }));

  it('should not show the edit button after edit button click', async(() => {
    fixture2.componentInstance.onButtonClick();
    fixture2.detectChanges();
    expect(compiled2.querySelector('.edit').style.visibility).toBe('hidden');
  }));

  it('should change the readonly value on save button click', async(() => {
    fixture2.componentInstance.onButtonClick();
    fixture2.detectChanges();
    fixture2.componentInstance.inputtext = 'myinput';
    fixture2.componentInstance.onSaveClick();
    fixture2.detectChanges();
    expect(compiled2.querySelector('.readonly').textContent).toContain('myinput');
  }));

  it('should show the delete button', async(() => {
    fixture2.detectChanges();
    expect(compiled2.querySelector('#delete')).toBeTruthy();
  }));

  it('should reset values on clicking delete button', async(() => {
    fixture2.componentInstance.onButtonClick();
    fixture2.componentInstance.inputtext = 'myinput';
    fixture2.componentInstance.onSaveClick();
    fixture2.componentInstance.onDeleteClick();
    fixture2.detectChanges();
    expect(compiled2.querySelector('.readonly').textContent).toContain('hello');
  }));
});
