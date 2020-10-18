import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Counter App';
  count: number = 0;

  // increaseCount(){

  // }

  increaseCount = () => {
    //increaseCount not greater then 10
    if (this.count === 10) {
      return this.count;
    }
    this.count = this.count + 1;
  };

  decreaseCount = () => {
    //decreaseCount no negative number
    if (this.count <= 0) {
      return this.count;
    }
    this.count = this.count - 1;
  };

  resetCount = () => {
    this.count = 0;
  };
}
