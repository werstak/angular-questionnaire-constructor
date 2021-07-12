import { QuestionsInterface } from '../interfaces/questions.interface';
export const QUESTIONS: QuestionsInterface[] = [


  { questionType: 'radio',
    questionTitle: 'How often do you go to a cafe?',
    answers: {
      one_answer: 'Everyday',
      two_answer: 'Few times a week',
      three_answer: 'Once a week',
      four_answer: 'Several times a month',
      five_answer: 'Once a month',
      Never: 'everyday',
    }
  },
  { questionType: 'checkbox',
    questionTitle: 'What do you most often order in a cafe?',
    answers: {
      one_answer: 'Vegetables, fruits, herbs',
      two_answer: 'Meat, fish, eggs',
      three_answer: 'Dairy products',
      four_answer: 'Drinks',
    }
  },
  { questionType: 'textarea',
    questionTitle: 'If you have any suggestions to improve the service of our cafe, write them here:',
    answers: '',
  },

];
