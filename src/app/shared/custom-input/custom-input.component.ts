import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css']
})
export class CustomInputComponent implements OnInit {

  mainInput = new FormControl('');

  constructor() { }

  ngOnInit(): void {
    this.mainInput.setValue('Test');
  }

}
