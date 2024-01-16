import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pop.component.html',
  styleUrl: './pop.component.css',
})
export class PopComponent {
  @Input() pop!: boolean;
  @Output() childEvent: any = new EventEmitter();
  tasks: any[] = [];
  save(item: string) {
    this.tasks.push({ name: item, editMode: false });
    this.pop = false;
    this.childEvent.emit({ show: false, todo: this.tasks });
  }
}
