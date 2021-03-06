// const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych', img:'http://www.gravatar.com/avatar/85814b0e506aa115df578a494e9e0b56?s=325&r=g&d=mm'},
        {id: 2, name: 'Andrew', img:'http://www.gravatar.com/avatar/85814b0e506aa115df578a494e9e0b56?s=325&r=g&d=mm'},
        {id: 3, name: 'Sveta', img:'http://www.gravatar.com/avatar/85814b0e506aa115df578a494e9e0b56?s=325&r=g&d=mm'},
        {id: 4, name: 'Sasha', img:'http://www.gravatar.com/avatar/85814b0e506aa115df578a494e9e0b56?s=325&r=g&d=mm'},
        {id: 5, name: 'Viktor', img:'http://www.gravatar.com/avatar/85814b0e506aa115df578a494e9e0b56?s=325&r=g&d=mm'},
        {id: 6, name: 'Valera', img:'http://www.gravatar.com/avatar/85814b0e506aa115df578a494e9e0b56?s=325&r=g&d=mm'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your life?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ]
    
};

const dialogsReducer = (state = initialState, action) => {
   switch (action.type) {
    //    case UPDATE_NEW_MESSAGE_BODY:{
    //     let stateCopy = {...state};
    //        stateCopy.newMessageBody = action.body;
    //        return stateCopy;
    //    }
       case SEND_MESSAGE:{
        let body = action.newMessageBody;
        return {
            ...state,
            messages: [...state.messages, {id: 6, message: body}]
        };
       }
       default:
           return state;
   }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE,newMessageBody})
// export const updateNewMessageBodyCreator = (body) =>
//     ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer;