import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PopComponent } from '../pop/pop.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, PopComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  tasks: any[] = [];
  popup: boolean = false;
  popup_change(e: any) {
    this.popup = Boolean(e.show);
    this.tasks = e.todo;
  }
  addTask() {
    this.popup = true;
  }
  onUpdate(i: number) {
    this.tasks[i].editMode = !this.tasks[i].editMode;
    localStorage.setItem('todo', JSON.stringify(this.tasks));
  }
  onDelete(i: number) {
    this.tasks.splice(i, 1);
    localStorage.setItem('todo', JSON.stringify(this.tasks));
  }
}
