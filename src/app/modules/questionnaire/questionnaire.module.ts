import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionnaireRoutingModule } from './questionnaire-routing.module';
import { QuestionnaireComponent } from './containers/questionnaire/questionnaire.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { AnswerListComponent } from './answer-list/answer-list.component';
import { MaterialModule } from '../../shared/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuestionSingleChoiceComponent } from './question-single-choice/question-single-choice.component';
import { QuestionMultipleChoiceComponent } from './question-multiple-choice/question-multiple-choice.component';
import { QuestionOpenComponent } from './question-open/question-open.component';


@NgModule({
  declarations: [QuestionnaireComponent, QuestionListComponent, AnswerListComponent, QuestionSingleChoiceComponent, QuestionMultipleChoiceComponent, QuestionOpenComponent],
  imports: [
    CommonModule,
    QuestionnaireRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class QuestionnaireModule { }
