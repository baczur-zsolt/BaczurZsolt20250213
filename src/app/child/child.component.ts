import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() a: number = 0;
  @Input() b: number = 0;
  @Output() result = new EventEmitter<number>();

  calc(op: string) {
    if (op === '+') {
      this.result.emit(this.a + this.b);
    } else if (op === '-') {
      this.result.emit(this.a - this.b);
    }
  }
}
