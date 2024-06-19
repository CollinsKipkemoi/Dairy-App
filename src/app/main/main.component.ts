import { Component, OnInit } from '@angular/core';
import { DiaryService } from '../diary.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit{
  numberOfEntries : number  = 5;
  startDate : string = new Date(2024,0, 1).toDateString();
  endDate : string = new Date().toDateString();

  constructor(private diaryService: DiaryService) { }

ngOnInit(){
  this.diaryService.countDiaries().subscribe(count => this.numberOfEntries = count);
  this.diaryService.firstDate().subscribe(date => this.startDate = new Date(date).toDateString());
  this.diaryService.lastDate().subscribe(date => this.endDate = new Date(date).toDateString());
}
}
