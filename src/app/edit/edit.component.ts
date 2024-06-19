import { DiaryService } from './../diary.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {DiaryFormComponent} from "../diary-form/diary-form.component";
import { Diary } from '../diary';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [
    DiaryFormComponent
  ],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  @Input() diary: Diary = new Diary();

  @Output() diaryUpdated: EventEmitter<Diary> = new EventEmitter<Diary>();

  constructor(private diaryService : DiaryService) { }

  
}
