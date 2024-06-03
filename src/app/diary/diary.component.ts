import {Component} from '@angular/core';
import {Diary} from "../diary";
import {JsonPipe, NgForOf} from "@angular/common";

@Component({
  selector: 'app-diary',
  standalone: true,
  imports: [
    JsonPipe,
    NgForOf
  ],
  templateUrl: './diary.component.html',
  styleUrl: './diary.component.css'
})
export class DiaryComponent {
  diaries: Diary[] = [
    {
      diaryTitle: 'First Diary',
      diaryDate: '2020-01-01',
      diaryText: 'This is my first diary.'
    },
    {
      diaryTitle: 'Second Diary',
      diaryDate: '2020-01-02',
      diaryText: 'This is my second diary.'
    },
    {
      diaryTitle: 'Third Diary',
      diaryDate: '2020-01-03',
      diaryText: 'This is my third diary.'
    },
    {
      diaryTitle: 'Fourth Diary',
      diaryDate: '2020-01-04',
      diaryText: 'This is my fourth diary.'
    },
    {
      diaryTitle: 'Fifth Diary',
      diaryDate: '2020-01-05',
      diaryText: 'This is my fifth diary.'
    }
  ]
}
