import { Injectable } from '@angular/core';
import { QUESTIONS } from '../../shared/constants/questions';

import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { QuestionsInterface } from '../../shared/interfaces/questions.interface';
import { AnswersInterface } from '../../shared/interfaces/answers.interface';

@Injectable({
  providedIn: 'root',
})
export class QuestionnaireService {
  allAnswers$ = new BehaviorSubject<AnswersInterface>(
    this.getAllAnswers()
  );

  questions$: Observable<QuestionsInterface[]>;
  answers$: Observable<QuestionsInterface[]>;

  constructor() {
    this.questions$ = combineLatest([
      of(QUESTIONS),
      this.allAnswers$
    ]).pipe(
      map(([questions, allAnswers]) => {
        return questions.filter(question => {
          return !Object.keys(allAnswers).includes(String(question.id));
        });
      }),
    );

    this.answers$ = combineLatest([
      of(QUESTIONS),
      this.allAnswers$
    ]).pipe(
      map(([questions, allAnswers]) => {
        return questions.filter(question => {
          return Object.keys(allAnswers).includes(String(question.id));
        });
      }),
    );

  }


  setAnswer(questionId: number, answer: string | string[]): void {
    const answers = this.getAllAnswers();
    answers[questionId] = answer;
    localStorage.setItem('answers', JSON.stringify(answers));

    this.allAnswers$.next(answers);
  }

  deleteAnswer(questionId: number): void {
    const answers = this.getAllAnswers();
    delete answers[questionId];
    localStorage.setItem('answers', JSON.stringify(answers));

    this.allAnswers$.next(answers);
  }

  getAllAnswers(): AnswersInterface {
    return JSON.parse(localStorage.getItem('answers') || '{}');
  }

  getAllAnswersById(id: number): AnswersInterface {
    const answers = this.getAllAnswers();
    return answers[id];
  }
}
