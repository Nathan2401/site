import React from 'react';
import ChatSideBar from './ChatSideBar';
import ChatContentChatBody from './ChatContentChatBody';
const ChatContentBody = () =>{
    return(
        <div className="content-body content-body-chat">
            <div className="chat-panel">
                <ChatSideBar/>
                <ChatContentChatBody/>
            </div>
        </div>
    

    );
}
export default ChatContentBody;