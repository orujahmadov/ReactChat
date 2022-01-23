import { combineReducers } from 'redux';
import * as actions from './actions';
import { Messages } from '../data/messages';


export interface Message {
    id: string;
    body: string;
    timestamp: string;
    username: string;
};

interface RootState {
    messages: Message[];
}

const initialState: RootState = {
    messages: Messages
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