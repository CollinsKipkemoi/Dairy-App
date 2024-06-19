import { Injectable } from '@angular/core';
import { Diary } from './diary';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DiaryService {

  constructor(private http: HttpClient) { }

  getDiaries(): Observable<Diary[]> {
    // return this.diaries;
    return this.http.get<Diary[]>('http://localhost:8000/api/diaries');
  }

  addDiary(diary: Diary): void {
    this.http.post('http://localhost:8000/api/diaries', diary).subscribe();
  }

  countDiaries(): Observable<number> {
    return this.http.get<Diary[]>('http://localhost:8000/api/diaries').pipe(
      map(diaries => diaries.length)
    );
  }

  firstDate(){
    return this.http.get<Diary[]>('http://localhost:8000/api/diaries').pipe(
      map(diaries => diaries[0].diaryDate)
    );
  }

  lastDate(){
    return this.http.get<Diary[]>('http://localhost:8000/api/diaries').pipe(
      map(diaries => diaries[diaries.length - 1].diaryDate)
    );
  }

  getIdForDiary(targetDiary: Diary): Observable<number> {
    return this.http.get<Diary[]>('http://localhost:8000/api/diaries').pipe(
      map(diaries => {
        const targetIndex = diaries.findIndex(diary => diary.diaryDate === targetDiary.diaryDate && diary.diaryTitle === targetDiary.diaryTitle && diary.diaryText === targetDiary.diaryText);
        return targetIndex;
      })
    );
  }

  updateDiary(diary: Diary) {
    let id = this.getIdForDiary(diary);
    return this.http.put(`http://localhost:8000/api/diaries/${id}`, diary).subscribe();

  }


}
