import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hinv-test-custom-pipe',
  templateUrl: './test-custom-pipe.component.html',
  styleUrls: ['./test-custom-pipe.component.css']
})
export class TestCustomPipeComponent implements OnInit {
  Fahrenheit: number;
  celcius: number;
  constructor() { }

  ngOnInit(): void {
  }

}
