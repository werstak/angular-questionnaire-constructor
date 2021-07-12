import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-single-choice',
  templateUrl: './question-single-choice.component.html',
  styleUrls: ['./question-single-choice.component.scss']
})
export class QuestionSingleChoiceComponent implements OnInit {
  favoriteSeason: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

  constructor() { }

  ngOnInit(): void {
  }

}
