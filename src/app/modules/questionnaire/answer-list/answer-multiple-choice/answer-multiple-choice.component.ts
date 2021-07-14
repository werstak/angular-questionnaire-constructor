import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { QuestionsInterface } from '../../../../shared/interfaces/questions.interface';
import { QuestionnaireService } from '../../questionnaire.service';

@Component({
  selector: 'app-answer-multiple-choice',
  templateUrl: './answer-multiple-choice.component.html',
  styleUrls: ['./answer-multiple-choice.component.scss']
})
export class AnswerMultipleChoiceComponent implements OnInit {
  @Input()
  answer: QuestionsInterface;
  form: FormGroup;

  constructor(
    private questionnaireService: QuestionnaireService,
    private fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): void {
    this.form = this.fb.group({
      one_answer: [false],
      two_answer: [false],
      three_answer: [false],
      four_answer: [false],
    });
  }

  submit(): void {
    console.log('Return bac');
  }

}
