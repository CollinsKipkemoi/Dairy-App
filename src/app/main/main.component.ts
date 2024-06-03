import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  numberOfEntries : number  = 5;
  startDate : string = new Date(2024,0, 1).toDateString();
  endDate : string = new Date().toDateString();
}
