import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='http://para.llel.us/themes/salutation-wp/wp-content/uploads/avatars/637/3af14e405a7d2d7f5b1881b933196979-bpthumb.jpg' />
        { props.message }
          <div>
        <span>like</span> { props.likesCount }
      </div>
    </div>
  )
}

export default Post;