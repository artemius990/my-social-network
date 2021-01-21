import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from "redux-form";

const MyPosts = (props) => {
    let postsElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    // let onPostChange = () => {
    //     let text = newPostElement.current.value;
    //     props.updateNewPostText(text);
    // }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            
                <AddNewPostsFormRedux onSubmit={onAddPost}/>
            
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

const AddNewPostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field component="textarea" name="newPostText"
                />
                </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostsFormRedux = reduxForm({ form: "ProfileAddNewPostsForm" })(AddNewPostsForm);


export default MyPosts;