import { ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO, COMPLETE_ALL, CLEAR_COMPLETED } from '../constants/ActionTypes'

const initialState = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0
  }
];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        {
          id: state.reduce((maxId, pande) => Math.max(pande.id, maxId), -1) + 1,
          completed: false,
          text: action.text
        }, 
        ...state
      ];

    case DELETE_TODO:
      return state.filter(pande =>
        pande.id !== action.id
      );

    case EDIT_TODO:
      return state.map(pande =>
        pande.id === action.id ?
          Object.assign({}, pande, { text: action.text }) :
          pande
      );

    case COMPLETE_TODO:
      return state.map(pande =>
        pande.id === action.id ?
          Object.assign({}, pande, { completed: !pande.completed }) :
          pande
      );

    case COMPLETE_ALL:
      const areAllMarked = state.every(pande => pande.completed)
      return state.map(pande => Object.assign({}, pande, {
        completed: !areAllMarked
      }));

    case CLEAR_COMPLETED:
      return state.filter(pande => pande.completed === false)

    default:
      return state
  }
}

