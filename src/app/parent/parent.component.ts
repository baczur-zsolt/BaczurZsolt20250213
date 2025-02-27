import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  standalone: false,
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})

export class ParentComponent {

  a: number = 0;
  b: number = 0;
  result: number = 0;

  handleResult(result: number) {
    this.result = result;
  }

}
