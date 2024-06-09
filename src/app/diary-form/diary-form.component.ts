import { ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { Diary } from '../diary';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { object } from 'yup';

@Component({
  selector: 'app-diary-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './diary-form.component.html',
  styleUrls: ['./diary-form.component.css'],
})
export class DiaryFormComponent implements OnChanges {
  @Input() diary: Diary = new Diary();
  @Output() saveDiary: EventEmitter<Diary> = new EventEmitter<Diary>();

  diaryForm = this.fb.group({
    diaryTitle: ['', [Validators.required]],
    diaryDate: ['', [Validators.required]],
    diaryText: ['', [Validators.required]]
  });

  get diaryTitle() {
    return this.diaryForm.get('diaryTitle');
  }

  get diaryDate() {
    return this.diaryForm.get('diaryDate');
  }

  get diaryText() {
    return this.diaryForm.get('diaryText');
  }

  constructor(private fb: FormBuilder, private cdr: ChangeDetectorRef) {  }

  ngOnChanges() {
    this.diaryForm.patchValue(this.diary);
    this.cdr.detectChanges();
  }

  handleSubmit() {
    const diary : Diary = new Diary();
    this.saveDiary.emit(Object.assign(diary, this.diaryForm.value));
  }
}
