import { Component, Input, OnInit } from '@angular/core';
import { QuestionsInterface } from '../../../../shared/interfaces/questions.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuestionnaireService } from '../../questionnaire.service';

@Component({
  selector: 'app-answer-open',
  templateUrl: './answer-open.component.html',
  styleUrls: ['./answer-open.component.scss']
})
export class AnswerOpenComponent implements OnInit {

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
      answer: [],
    });
  }


  submit(): void {
    console.log('Return bac');
  }

}
