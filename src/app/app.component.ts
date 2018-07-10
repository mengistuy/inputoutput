import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
 template: `<div><p><app-counter [counter]='ComponentCounterValue' (counterChange)='myEventListner($event)'></app-counter>
 Component Counter Value = {{ComponentCounterValue}}</p></div>`
})
export class AppComponent {
  ComponentCounterValue;
  public myEventListner(data) {
    this.ComponentCounterValue = data;
  }

}
