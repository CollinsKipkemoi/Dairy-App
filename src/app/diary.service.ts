import { Injectable } from '@angular/core';
import { Diary } from './diary';

@Injectable({
  providedIn: 'root'
})
export class DiaryService {

  private diaries: Diary[] = [
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

  constructor() { }

  getDiaries(): Diary[] {
    return this.diaries;
  }
}
