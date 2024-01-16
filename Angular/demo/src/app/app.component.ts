import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
interface TodoItem {
  name: string;
  editMode: boolean;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  todo: TodoItem[] = [];
  onSubmit(val: string) {
    this.todo.push({ name: val, editMode: false });
    localStorage.setItem('todo', JSON.stringify(this.todo));
  }
  onUpdate(val: number) {
    this.todo[val].editMode = !this.todo[val].editMode;
    localStorage.setItem('todo', JSON.stringify(this.todo));
  }
  onDelete(val: number) {
    this.todo.splice(val, 1);
    localStorage.setItem('todo', JSON.stringify(this.todo));
  }
}
