import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css']
})
export class CustomInputComponent implements OnInit {

  mainInput = new FormControl('');
  @Output() text = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.mainInput.setValue('Test');
  }

  onButtonClick(): void {
    this.text.emit(this.mainInput.value);
  }
}
