import { Component } from '@angular/core';
import { DiaryFormComponent } from "../diary-form/diary-form.component";

@Component({
    selector: 'app-new',
    standalone: true,
    templateUrl: './new.component.html',
    styleUrl: './new.component.css',
    imports: [DiaryFormComponent]
})
export class NewComponent {

}
