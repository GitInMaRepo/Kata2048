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
    }

}
