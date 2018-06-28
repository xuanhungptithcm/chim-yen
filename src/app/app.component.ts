import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  ngOnInit(): void {
    if (!localStorage.getItem('y')) {
      localStorage.setItem('y', '0');
    }
  }
}
