import { Component } from '@angular/core';

@Component({
  selector: 'app-tutorial',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tutorial';
  showReadWrite = false;
  inputtext = 'hello';

  onButtonClick() {
    this.showReadWrite = true;
  }

  onSaveClick() {
    this.showReadWrite = false;
  }

  onDeleteClick() {
    this.inputtext = 'hello';
  }
}


