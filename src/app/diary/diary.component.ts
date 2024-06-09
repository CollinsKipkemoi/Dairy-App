import { DiaryService } from './../diary.service';
import {Component, OnInit} from '@angular/core';
import {Diary} from "../diary";
import {JsonPipe, NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";
import { DiaryFormComponent } from "../diary-form/diary-form.component";

@Component({
    selector: 'app-diary',
    standalone: true,
    templateUrl: './diary.component.html',
    styleUrl: './diary.component.css',
    imports: [
        JsonPipe,
        NgForOf,
        RouterLink,
        DiaryFormComponent
    ]
})
export class DiaryComponent implements OnInit {

  diaries : Diary[] = []
  selectedDiary: Diary | null = null;

  constructor(private diaryService: DiaryService) { }

  onSelect(diary: Diary): void {
    this.selectedDiary = diary;
  }

  handleSave(diary: Diary): void {
    if(this.selectedDiary !== null) {
      Object.assign(this.selectedDiary, diary);
    }
    this.selectedDiary = null;

  }

  ngOnInit(){
    this.diaries = this.diaryService.getDiaries();
  }

}
