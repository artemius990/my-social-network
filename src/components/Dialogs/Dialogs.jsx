import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let newMessageElement=React.createRef()

    let addMessage=()=>{
       props.addMessage();
    }
	
	 let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
    }
	
    let dialogsElements =  props.state.dialogs.map( d => <DialogItem 	name={d.name}	img={d.img} 	id={d.id} />  );
	
    let messagesElements = props.state.messages.map( m => <Message 
	message={m.message}
	// addMessage={props.addMessage}
	// 		updateNewMessageText={props.updateNewMessageText}	
	/> );

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
            <textarea className={s.textarea} onChange={onMessageChange} ref={newMessageElement} value={props.newMessageText}></textarea>
	<button className={s.button} onClick={addMessage}>Send</button></div>
	
        </div>
    )
}

export default Dialogs;