import React from 'react';
const LoggedUserDropdown = () => {
    return(
        <div className="dropdown dropdown-loggeduser">
        <a href="" className="dropdown-link" data-toggle="dropdown">
          <div className="avatar avatar-sm">
            <img src="https://via.placeholder.com/500/637382/fff" class="rounded-circle" alt=""/>
          </div>
        </a>
        <div className="dropdown-menu dropdown-menu-right">
          <div className="dropdown-menu-header">
            <div className="media align-items-center">
              <div className="avatar">
                <img src="https://via.placeholder.com/500/637382/fff" class="rounded-circle" alt=""/>
              </div>
              <div className="media-body mg-l-10">
                <h6>Louise Kate Lumaad</h6>
                <span>Administrator</span>
              </div>
            </div>
          </div>
          <div className="dropdown-menu-body">
            <a href="" className="dropdown-item"><i className="far fa-user"></i> View Profile</a>
            <a href="" className="dropdown-item"><i className="fas fa-pencil-alt"></i> Edit Profile</a>
            <a href="" className="dropdown-item"><i className='far fa-suitcase'></i> Account Settings</a>
            <a href="" className="dropdown-item"><i className="far fa-shield"></i> Privacy Settings</a>
            <a href="" className="dropdown-item"><i className="fal fa-sign-out"></i> Sign Out</a>
          </div>
        </div>
      </div>
        
    )
}
export default LoggedUserDropdown;