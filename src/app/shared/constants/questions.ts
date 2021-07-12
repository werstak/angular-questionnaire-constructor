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
    // answers: {
    //   one_answer: 'Everyday',
    //   two_answer: 'Few times a week',
    //   three_answer: 'Once a week',
    //   four_answer: 'Several times a month',
    //   five_answer: 'Once a month',
    //   Never: 'everyday',
    // }
  },
  {
    id: 2,
    questionType: 'radio',
    questionTitle: 'How often do you go to a cafe?111',
    answers: [
      {value: 'one_answer111', title: 'Everyday111'},
      {value: 'two_answer111', title: 'Few times a week111'},
    ]
    // answers: {
    //   one_answer: 'Everyday',
    //   two_answer: 'Few times a week',
    //   three_answer: 'Once a week',
    //   four_answer: 'Several times a month',
    //   five_answer: 'Once a month',
    //   Never: 'everyday',
    // }
  },
  // {
  //   id: 2,
  //   questionType: 'checkbox',
  //   questionTitle: 'What do you most often order in a cafe?',
  //   // answers: {
  //   //   one_answer: 'Vegetables, fruits, herbs',
  //   //   two_answer: 'Meat, fish, eggs',
  //   //   three_answer: 'Dairy products',
  //   //   four_answer: 'Drinks',
  //   // }
  // },
  // {
  //   id: 3,
  //   questionType: 'textarea',
  //   questionTitle: 'If you have any suggestions to improve the service of our cafe, write them here:',
  //   answer: '',
  // },
];
