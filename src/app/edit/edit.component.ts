import { Component } from '@angular/core';
import {DiaryFormComponent} from "../diary-form/diary-form.component";

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

}
