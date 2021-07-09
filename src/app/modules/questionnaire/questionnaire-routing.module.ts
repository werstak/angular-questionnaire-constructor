import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionnaireComponent } from './containers/questionnaire/questionnaire.component';

const routes: Routes = [
  {
    path: 'list-questions',
    component: QuestionnaireComponent,
  },
  {
    path: '',
    redirectTo: 'list-questions',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionnaireRoutingModule { }
