import { Component } from '@angular/core';
import {Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent  implements OnChanges {
  @Input() inputData: string | undefined;
  previousInputData: string | undefined;

  ngOnChanges(changes: SimpleChanges): void {
    const inputDataChange: SimpleChange | undefined = changes['inputData'];

    if (inputDataChange) {
      this.previousInputData = inputDataChange.previousValue;
      console.log('Input data changed:', this.inputData);
    }
  }
}
