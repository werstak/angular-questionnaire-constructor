import { Component, Input, OnInit } from '@angular/core';
import { QuestionsInterface } from '../../../shared/interfaces/questions.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QuestionnaireService } from '../questionnaire.service';

@Component({
  selector: 'app-question-single-choice',
  templateUrl: './question-single-choice.component.html',
  styleUrls: ['./question-single-choice.component.scss']
})
export class QuestionSingleChoiceComponent implements OnInit {
  @Input()
  question: QuestionsInterface;

  form = new FormGroup({
    answer: new FormControl(null, Validators.required)
  });

  constructor(
    private questionnaireService: QuestionnaireService
  ) { }

  ngOnInit(): void {
  }

  submit(): void {
    this.questionnaireService.setAnswer(
      this.question.id,
      this.form.value.answer
    );
  }
}
