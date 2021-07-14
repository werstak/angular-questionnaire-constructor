import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { QuestionsInterface } from '../../../shared/interfaces/questions.interface';
import { QuestionnaireService } from '../questionnaire.service';

@Component({
  selector: 'app-question-multiple-choice',
  templateUrl: './question-multiple-choice.component.html',
  styleUrls: ['./question-multiple-choice.component.scss']
})
export class QuestionMultipleChoiceComponent implements OnInit {
  @Input()
  question: QuestionsInterface;
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
    this.questionnaireService.setAnswer(
      this.question.id,
      this.form.value
    );
  }

}
