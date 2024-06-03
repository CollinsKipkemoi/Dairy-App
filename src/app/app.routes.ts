import {Routes} from '@angular/router';
import {MainComponent} from "./main/main.component";
import {AboutComponent} from "./about/about.component";
import {DiaryComponent} from "./diary/diary.component";
import {EditComponent} from "./edit/edit.component";
import {NewComponent} from "./new/new.component";

export const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: "diary",
    component: DiaryComponent
  },
  {
    path: 'edit',
    component: EditComponent
  },
  {
    path: 'new',
    component: NewComponent
  }
];
