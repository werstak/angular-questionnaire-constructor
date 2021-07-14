import { QuestionsInterface } from '../interfaces/questions.interface';

export const QUESTIONS: QuestionsInterface[] = [
  {
    id: 1,
    questionType: 'radio',
    questionTitle: 'How often do you go to a cafe?',
    answers: [
      {value: 'one_answer', title: 'Everyday'},
      {value: 'two_answer', title: 'Few times a week'},
    ]
  },
  {
    id: 2,
    questionType: 'checkbox',
    questionTitle: 'What do you most often order in a cafe?',
    answers: [
      {value: 'one_answer', title: 'Vegetables, fruits, herbs'},
      {value: 'two_answer', title: 'Meat, fish, eggs'},
      {value: 'three_answer', title: 'Dairy products'},
      {value: 'four_answer', title: 'Drinks'},
    ]
  },
  {
    id: 3,
    questionType: 'textarea',
    questionTitle: 'If you have any suggestions to improve the service of our cafe, write them here:',
    answer: '',
  },
  {
    id: 4,
    questionType: 'radio',
    questionTitle: 'How often do you go to a cafe?111',
    answers: [
      {value: 'one_answer111', title: 'Everyday111'},
      {value: 'two_answer111', title: 'Few times a week111'},
    ]
  },
  {
    id: 5,
    questionType: 'textarea',
    questionTitle: 'If you have any suggestions to improve the service of our cafe, write them here:',
    answer: '',
  },
];
