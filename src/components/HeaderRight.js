import React from 'react';
import RightNotification from './RightNotification';
import LoggedUserDropdown from './LoggedUserDropdown';
import HelperCircle from './HelperCircle';

const HeaderRight = () => {
    return(
        <div class="header-right">
             <HelperCircle/>
             <RightNotification/>
             <LoggedUserDropdown/>
        </div>//header-right
    );
}
export default HeaderRight;