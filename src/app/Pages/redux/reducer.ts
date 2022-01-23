import { combineReducers } from 'redux';
import * as actions from './actions';
import { Messages } from '../data/messages';


export interface Message {
    id: number;
    body: string;
    timestamp: string;
    username: string;
};

interface RootState {
    messages: Message[];
    kelesov?: number;
}

const initialState: RootState = {
    messages: Messages,
    kelesov: 1993
}

const messagesReducer =  (state = initialState, action: any) => {
    switch (action.type) {
     case actions.POST_MESSAGE:
      return {
          messages: [...state.messages, action.payload]
      }
     default:
      return state
    }
};



const rootReducer = combineReducers({
  messages: messagesReducer
})

export default rootReducer