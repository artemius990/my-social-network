import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It\'s my first post', likesCount: 11},
            {id: 3, message: 'Blabla', likesCount: 11},
            {id: 4, message: 'Dada', likesCount: 11}
        ],
		newPostText: 'it-kamasutra.com'
    },
    dialogsPage: {
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
            {id: 2, message: 'How is your it-kamasutra?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'}
        ]
    },
    sidebar: {}
}


window.state = state;

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}


export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export default state;




