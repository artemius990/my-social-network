import React from 'react';
import s from './../Dialogs.module.css';

const Message = (props) => {
	
	let newMessageElement=React.createRef()

    let addMessage=()=>{
        let text=newMessageElement.current.value
        alert(text)
    }
	
    return (
	<div className={s.dialog}>
	{props.message}
	
	<textarea className={s.textarea} ref={newMessageElement}></textarea>
	
	 <button className={s.button} onClick={addMessage}>Send</button>
	 
	</div>
	)
}

export default Message;