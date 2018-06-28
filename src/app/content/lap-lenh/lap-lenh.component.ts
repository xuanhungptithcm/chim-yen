import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lap-lenh',
  templateUrl: './lap-lenh.component.html',
  styleUrls: ['./lap-lenh.component.css']
})
export class LapLenhComponent implements OnInit {
   second: Number = 0;
   minute: Number = 0;
   hours: Number = 0;
  constructor() { }

  ngOnInit() {
  }

  changeStateToggle(value, item) {
    console.log(value, item);
  }
}
