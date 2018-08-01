import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './game-two-k.component.html',
  styleUrls: ['./game-two-k.component.css']
})
export class GameTwoKComponent implements OnInit {

  fields: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  constructor() { }

  ngOnInit() {
    this.startGame();
    }

  startGame() {
    this.fields[1] = 2;
    this.fields[6] = 2;
    console.log(this.fields);
    }

  moveDown() {
    for (let i = 0; i < this.fields.length - 4; i++) {
     if (this.fields[i] !== 0) {
      this.fields[i + 4] = this.fields[i];
      this.fields[i] = 0;
     }
    }
  }

  moveUp() {
    for (let i = this.fields.length - 1; i >= 4; i--) {
      if (this.fields[i] !== 0) {
       this.fields[i - 4] = this.fields[i];
       this.fields[i] = 0;
      }
     }
  }
  moveLeft() {
    for (let i = 0; i < this.fields.length; i++) {
      if (this.fields[i] !== 0) {
        if (i % 4 !== 0) {
          this.fields[i - (i % 4)] = this.fields[i];
          this.fields[i] = 0;
        }
      }
     }
  }
  moveRight() {
    for (let i = 0; i < this.fields.length; i++) {
      if (this.fields[i] !== 0) {
        if (i % 4 !== 3) {
          this.fields[i + ((i % 4) -  3) * - 1] = this.fields[i];
          this.fields[i] = 0;
        }
      }
     }
  }
}
