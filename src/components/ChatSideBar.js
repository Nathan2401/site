import React from 'react';

const ChatSideBar = () =>{
    return(
        <div className="chat-sidebar">
            <div className="chat-sidebar-header">
              <h6 class="tx-14 tx-color-01 mg-b-0">Recent Conversations</h6>
              <div>
                <a href="" data-toggle="tooltip" title="New Conversation"><i className="fas fa-user-plus"></i></a>
                <a href="" data-toggle="tooltip" title="Options"><i className='fas fa-ellipsis-v'></i></a>
              </div>
            </div>
            <div className="chat-sidebar-body">
              <ul className="chat-list">
                <li className="chat-item unread">
                  <div className="avatar avatar-online"><span class="avatar-initial rounded-circle bg-primary">j</span></div>
                  <div className="chat-item-body">
                    <div>
                      <span>Joyce Marin</span>
                      <span>2:30pm</span>
                    </div>
                    <p>At vero eos et accusamus et iusto est tempore</p>
                    <span className="chat-msg-count">2</span>
                  </div>
                </li>
                <li className="chat-item">
                  <div className="avatar avatar-online"><span class="avatar-initial rounded-circle bg-dark">g</span></div>
                  <div class="chat-item-body">
                    <div>
                      <span>George Winslett</span>
                      <span>12:35pm</span>
                    </div>
                    <p>At vero eos et accusamus et iusto est tempore</p>
                  </div>
                </li>
                <li className="chat-item">
                  <div className="avatar avatar-offline"><img src="https://via.placeholder.com/500/637382/fff" class="rounded-circle" alt=""/></div>
                  <div className="chat-item-body">
                    <div>
                      <span>Vilma Baumann</span>
                      <span>10:30am</span>
                    </div>
                    <p>Nam libero tempore, cum soluta nobis est eligendi </p>
                  </div>
                </li>
                <li className="chat-item">
                  <div className="avatar avatar-online"><img src="https://via.placeholder.com/500/637382/fff" class="rounded-circle" alt=""/></div>
                  <div class="chat-item-body">
                    <div>
                      <span>Gregory Thompson</span>
                      <span>08:15am</span>
                    </div>
                    <p>At vero eos et accusamus et iusto est tempore</p>
                  </div>
                </li>
                <li className="chat-item">
                  <div className="avatar avatar-online"><span class="avatar-initial rounded-circle bg-pink">s</span></div>
                  <div className="chat-item-body">
                    <div>
                      <span>Shelley Bailes</span>
                      <span>06:30am</span>
                    </div>
                    <p>Excepteur sint occaecat cupidatat non proides</p>
                  </div>
                </li>
                <li className="chat-item unread">
                  <div className="avatar avatar-offline"><span className="avatar-initial rounded-circle bg-teal">a</span></div>
                  <div className="chat-item-body">
                    <div>
                      <span>Alana Ogden</span>
                      <span>Yesterday</span>
                    </div>
                    <p>At vero eos et accusamus et iusto est tempore</p>
                    <span className="chat-msg-count">5</span>
                  </div>
                </li>
                <li class="chat-item unread">
                  <div class="avatar avatar-online"><img src="https://via.placeholder.com/500/637382/fff" class="rounded-circle" alt=""/></div>
                  <div class="chat-item-body">
                    <div>
                      <span>Cheryl Arnold</span>
                      <span>Yesterday</span>
                    </div>
                    <p>Nam libero tempore, cum soluta nobis est eligendi </p>
                    <span class="chat-msg-count">1</span>
                  </div>
                </li>
                
                <li className="chat-item">
                  <div className="avatar avatar-online"><span class="avatar-initial rounded-circle bg-secondary">b</span></div>
                  <div className="chat-item-body">
                    <div>
                      <span>Barbara Jordan</span>
                      <span>Jul 02</span>
                    </div>
                    <p>Excepteur sint occaecat cupidatat non proides</p>
                  </div>
                </li>
                <li className="chat-item">
                  <div className="avatar avatar-offline"><span class="avatar-initial rounded-circle bg-primary">m</span></div>
                  <div className="chat-item-body">
                    <div>
                      <span>Mark Moreno</span>
                      <span>Jun 30</span>
                    </div>
                    <p>Excepteur sint occaecat cupidatat non proides</p>
                  </div>
                </li>
                <li className="chat-item">
                  <div className="avatar avatar-offline"><span class="avatar-initial rounded-circle bg-warning">j</span></div>
                  <div className="chat-item-body">
                    <div>
                      <span>John Godinez</span>
                      <span>Jun 30</span>
                    </div>
                    <p>Excepteur sint occaecat cupidatat non proides</p>
                  </div>
                </li>
                <li className="chat-item unread">
                  <div className="avatar avatar-online"><img src="https://via.placeholder.com/500/637382/fff" className="rounded-circle" alt=""/></div>
                  <div className="chat-item-body">
                    <div>
                      <span>Edmund Trivett</span>
                      <span>Jun 29</span>
                    </div>
                    <p>At vero eos et accusamus et iusto est tempore</p>
                    <span className="chat-msg-count">1</span>
                  </div>
                </li>
                <li className="chat-item">
                  <div className="avatar avatar-offline"><span class="avatar-initial rounded-circle bg-indigo">g</span></div>
                  <div class="chat-item-body">
                    <div>
                      <span>Glenn Kane</span>
                      <span>Jun 29</span>
                    </div>
                    <p>Excepteur sint occaecat cupidatat non proides</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="chat-sidebar-footer">
              <div className="avatar avatar-sm avatar-online"><img src="https://via.placeholder.com/500/637382/fff" className="rounded-circle" alt=""/></div>
              <h6 className="chat-loggeduser">Louise Kate <span>(Me)</span></h6>
              <div>
                <a href="" data-toggle="tooltip" title="Enable Mic"><i data-feather="mic"></i></a>
                <a href="" data-toggle="tooltip" title="Settings"><i data-feather="settings"></i></a>
              </div>
            </div>
          </div>
    )
}
export default ChatSideBar;