import { Component } from '@angular/core';
import { DiaryFormComponent } from "../diary-form/diary-form.component";
import { Router } from '@angular/router';
import { DiaryService } from '../diary.service';
import { Diary } from '../diary';

@Component({
    selector: 'app-new',
    standalone: true,
    templateUrl: './new.component.html',
    styleUrl: './new.component.css',
    imports: [DiaryFormComponent]
})
export class NewComponent {

  constructor(private diaryService : DiaryService, private router : Router) { }

  handleSave(diary : Diary): void {
    this.diaryService.addDiary(diary);
    this.router.navigate(['/diary']);
  }
}
