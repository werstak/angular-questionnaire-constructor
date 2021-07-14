import { Component, Input, OnInit } from '@angular/core';
import { QuestionsInterface } from '../../../../shared/interfaces/questions.interface';
import { FormBuilder, FormGroup } from '@angular/forms';
import { QuestionnaireService } from '../../questionnaire.service';

@Component({
  selector: 'app-answer-single-choice',
  templateUrl: './answer-single-choice.component.html',
  styleUrls: ['./answer-single-choice.component.scss']
})
export class AnswerSingleChoiceComponent implements OnInit {
  @Input()
  answer: QuestionsInterface;
  form: FormGroup;

  constructor(
    private questionnaireService: QuestionnaireService,
    private fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    // console.log('question', this.question);
    this.buildForm();
  }

  private buildForm(): void {

    this.questionnaireService.allAnswers$.subscribe(answers => {
      console.log('answers', answers);
    });

    this.form = this.fb.group({
      answer: [''],
    });

    // this.form.setValue({
    //   answer: this.question.answer,
    // });

  }

  submit(): void {
    console.log('Return bac');
  }
}
