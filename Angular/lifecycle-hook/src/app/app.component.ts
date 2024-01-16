import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './component/child/child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'lifecycle-hook';
  isVisible: boolean = false;
  numFromChild!: number;

  receiveNum(num: number) {
    this.numFromChild = num;
    console.log(num);
  }
  hideShow() {
    this.isVisible = !this.isVisible;
  }
  Increment() {
    this.numFromChild++;
  }
  Decrement() {
    this.numFromChild--;
  }
}
