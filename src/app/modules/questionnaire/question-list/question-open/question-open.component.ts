import { Component, Input, OnInit } from '@angular/core';
import { QuestionsInterface } from '../../../../shared/interfaces/questions.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuestionnaireService } from '../../questionnaire.service';

@Component({
  selector: 'app-question-open',
  templateUrl: './question-open.component.html',
  styleUrls: ['./question-open.component.scss']
})
export class QuestionOpenComponent implements OnInit {

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
      answer: [null, Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(225)])
      ],
    });
  }

  submit(): void {
    this.questionnaireService.setAnswer(
      this.question.id,
      this.form.value
    );
  }
}
