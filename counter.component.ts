import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-counter',
  template: `<div class="b">
    <button (click)="decreaseNumber()">-</button>
    <label>{{counter}}</label>
    <button (click)="increamentNumber()">+</button></div>
  `,
  styles: ['.b{border:1}']
})
export class CounterComponent {

 @Input() counter;
 @Output() counterChange = new EventEmitter();
 // counterValue = 0;
  constructor() { }
   counterValue = 0;
 decreaseNumber() {
    this.counterValue--;
    this.counterChange.emit(this.counterValue);
 }
 increamentNumber() {
    this.counterValue++;
    this.counterChange.emit(this.counterValue);
 }
}
