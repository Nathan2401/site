import React from 'react';
 const RightNotification = () =>{
     return(
        <div className="dropdown dropdown-notification">
        <a href="" className="dropdown-link new" data-toggle="dropdown"><i className="far fa-bell"></i></a>
        <div className="dropdown-menu dropdown-menu-right">
          <div className="dropdown-menu-header">
            <h6>Notifications</h6>
            <a href=""><i className='fas fa-ellipsis-v'></i></a>
          </div>
          <div className="dropdown-menu-body">
            <a href="" className="dropdown-item">
              <div className="avatar"><span className="avatar-initial rounded-circle text-primary bg-primary-light">s</span></div>
              <div className="dropdown-item-body">
                <p><strong>Socrates Itumay</strong> marked the task as completed.</p>
                <span>5 hours ago</span>
              </div>
            </a>
            <a href="" className="dropdown-item">
              <div className="avatar"><span class="avatar-initial rounded-circle tx-pink bg-pink-light">r</span></div>
              <div class="dropdown-item-body">
                <p><strong>Reynante Labares</strong> marked the task as incomplete.</p>
                <span>8 hours ago</span>
              </div>
            </a>
            <a href="" className="dropdown-item">
              <div class="avatar"><span class="avatar-initial rounded-circle tx-success bg-success-light">d</span></div>
              <div className="dropdown-item-body">
                <p><strong>Dyanne Aceron</strong> responded to your comment on this <strong>post</strong>.</p>
                <span>a day ago</span>
              </div>
            </a>
            <a href="" className="dropdown-item">
              <div class="avatar"><span class="avatar-initial rounded-circle tx-indigo bg-indigo-light">k</span></div>
              <div className="dropdown-item-body">
                <p><strong>Kirby Avendula</strong> marked the task as incomplete.</p>
                <span>2 days ago</span>
              </div>
            </a>
          </div>
          <div className="dropdown-menu-footer">
            <a href="">View All Notifications</a>
          </div>
        </div>
      </div>

     )
 }
 export default RightNotification;