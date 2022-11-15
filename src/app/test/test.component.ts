import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  @Input() card: any;

  currentVal: number = 0;
  isPressed: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  incrementValue() {
    this.isPressed = true;
    this.currentVal++;
  }
}
