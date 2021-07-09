import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionnaireRoutingModule } from './questionnaire-routing.module';
import { QuestionnaireComponent } from './containers/questionnaire/questionnaire.component';
import { QuestionComponent } from './question/question.component';


@NgModule({
  declarations: [QuestionnaireComponent, QuestionComponent],
  imports: [
    CommonModule,
    QuestionnaireRoutingModule
  ]
})
export class QuestionnaireModule { }
