import { Component, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './component/child/child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnChanges {
  title = 'lifecycle-hook';
  isVisible:boolean = false;

  hideShow(){
    this.isVisible = !this.isVisible;
    console.log(this.isVisible)
  }
  Increment(){

  }
  Decrement(){
    

  }

  onChange(){

  }
}
