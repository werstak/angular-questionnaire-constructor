import { Injectable } from '@angular/core';
import { QUESTIONS } from '../../shared/constants/questions';
import { BehaviorSubject, combineLatest, Observable, of, ReplaySubject, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { QuestionsInterface } from '../../shared/interfaces/questions.interface';

@Injectable({
  providedIn: 'root',
})
export class QuestionnaireService {
  allAnswers$ = new BehaviorSubject<any>(
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

    // const answers = this.getAllAnswers();
    // this.allAnswers$.next(answers);
  }



  setAnswer(questionId: number, answer: string | string[]): void {
    const answers = this.getAllAnswers();
    answers[questionId] = answer;
    localStorage.setItem('answers', JSON.stringify(answers));

    this.allAnswers$.next(answers);
  }

  getAllAnswers(): any {
    return JSON.parse(localStorage.getItem('answers') || '{}');
  }
}
