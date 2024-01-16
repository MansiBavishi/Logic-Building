import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  Output,
  SimpleChange,
  SimpleChanges,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  @Input() abc?: boolean;
  num?: number;
  @Output() numEvent = new EventEmitter<number>();

  onSubmit(val: number) {
    this.num = val;
    //send number
    this.numEvent.emit(this.num);
  }
  ngOnChanges(changes: SimpleChanges) {
    const newChanges: SimpleChange = changes['abc'];
    console.log(newChanges);
  }
}
