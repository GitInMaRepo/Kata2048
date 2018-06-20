import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GameTwoKComponent } from './game-two-k/game-two-k.component';

@NgModule({
  declarations: [
    AppComponent,
    GameTwoKComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [GameTwoKComponent]
})
export class AppModule { }
