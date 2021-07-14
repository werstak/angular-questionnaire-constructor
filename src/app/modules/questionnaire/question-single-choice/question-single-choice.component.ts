import { Component, Input, OnInit } from '@angular/core';
import { QuestionsInterface } from '../../../shared/interfaces/questions.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuestionnaireService } from '../questionnaire.service';

@Component({
  selector: 'app-question-single-choice',
  templateUrl: './question-single-choice.component.html',
  styleUrls: ['./question-single-choice.component.scss']
})
export class QuestionSingleChoiceComponent implements OnInit {
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
      answer: ['', [Validators.required]],
    });
  }

  submit(): void {
    this.questionnaireService.setAnswer(
      this.question.id,
      this.form.value.answer
    );
  }
}
