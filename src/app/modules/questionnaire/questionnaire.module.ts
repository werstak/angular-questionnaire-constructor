import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionnaireRoutingModule } from './questionnaire-routing.module';
import { QuestionnaireComponent } from './containers/questionnaire/questionnaire.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { AnswerListComponent } from './answer-list/answer-list.component';
import { MaterialModule } from '../../shared/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuestionSingleChoiceComponent } from './question-list/question-single-choice/question-single-choice.component';
import { QuestionMultipleChoiceComponent } from './question-list/question-multiple-choice/question-multiple-choice.component';
import { QuestionOpenComponent } from './question-list/question-open/question-open.component';
import { AnswerSingleChoiceComponent } from './answer-list/answer-single-choice/answer-single-choice.component';
import { AnswerMultipleChoiceComponent } from './answer-list/answer-multiple-choice/answer-multiple-choice.component';
import { AnswerOpenComponent } from './answer-list/answer-open/answer-open.component';


@NgModule({
  declarations: [
    QuestionnaireComponent,
    QuestionListComponent,
    AnswerListComponent,
    QuestionSingleChoiceComponent,
    QuestionMultipleChoiceComponent,
    QuestionOpenComponent,
    AnswerSingleChoiceComponent,
    AnswerMultipleChoiceComponent,
    AnswerOpenComponent,
  ],
  imports: [
    CommonModule,
    QuestionnaireRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class QuestionnaireModule {
}
