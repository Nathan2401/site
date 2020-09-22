import React from 'react';


const MessageBodyContent = ({messages}) =>{
    const H = new Date().getHours();
    const M = new Date().getMinutes();
    let m;
    if(M<10){
     m = '0' + M
    }
    else{
        m = M;
    }
    const messageContent = messages.map((message,index) =>
    
    
        <li className="msg-item" key={index}>
        <div className="avatar avatar-sm avatar-online"><img src="https://via.placeholder.com/500/637382/fff" className="rounded-circle" alt=""/></div>


            <div className="msg-body">
            <h6 className="msg-user">@cheryl <span>{` at ${H}:${m}`}</span></h6>

            <p><span>{message.msgText}</span></p>
          </div>
        </li>
       
    
        

         
          
    )
    return(
        <div className="chat-body-content">
            <ul className="chat-msg-list">
                <li className="divider-text">{new Date().toDateString()}</li>
            
            {messageContent}
            </ul>
            
      </div>
    )
}
export default MessageBodyContent;