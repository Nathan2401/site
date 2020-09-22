import React from 'react';
import MessageBodyContent from './MessageBodyContent';

class ChatContentChatBody extends React.Component{
  state = {
  
    text:'',
    message:[]
  }
  onSearchSubmit = e =>{
    e.preventDefault();
    const{message} = this.state;
   message.push({msgText:this.state.text})
    this.setState({message,})
    this.setState({text:''});
    
  }
   render(){

    return(
      <div className="chat-body">
      <div className="chat-body-header">
        <div className="avatar avatar-xs avatar-online"><span className="avatar-initial rounded-circle bg-dark">g</span></div>

        <h6 className="tx-14 tx-color-01 mg-b-0 mg-l-10">George Winslett</h6>

        <div className="chat-body-options">
          <a href="" data-toggle="tooltip" title="Search messages"><i className='fas fa-search'></i></a>
          <a href="" data-toggle="tooltip" title="Call"><i className="fas fa-phone-alt"></i></a>
          <a href="" data-toggle="tooltip" title="Video Call"><i className='fas fa-video'></i></a>
          <a href="" data-toggle="tooltip" title="Info"><i className='fas fa-info-circle'></i></a>
        </div>
      </div>
      
        
      <MessageBodyContent messages={this.state.message}/>
     
        
      

      <div className="chat-body-footer">
        <div classname="chat-body-options">
          <a href="" data-toggle="tooltip" title="Add Image"><i className='far fa-image'></i></a>
          <a href="" data-toggle="tooltip" title="Add Gift"><i className='fas fa-gift'></i></a>
          <a href="" data-toggle="tooltip" title="Add Emoticon"><i className='fas fa-smile'></i></a>
        </div>
        <div className="form-group">
          <form onSubmit={this.onSearchSubmit}>
            <input type="text" class="form-control" placeholder="Type something..." value={this.state.text} onChange ={e=>this.setState({text:e.target.value})}/>
          </form>
          
        </div>
        <button className="btn btn-icon"><i className="far fa-paper-plane"></i></button>
      </div>
    </div>
  )
   }
}
export default ChatContentChatBody