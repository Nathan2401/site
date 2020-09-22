import React from 'react';
const HeaderLeft = () =>{
    return(
        <div className="header-left">
          <a id="menuMain" href="" className="burger-menu"><i className='fas fa-bars'></i></a>
          <a id="menuBack" href="" className="burger-menu d-none"><i className="fas fa-arrow-left"></i></a>

          <div className="header-search">
            <i className="fas fa-search"></i>
            <input type="search" className="form-control" placeholder="Search for conversations"/>
          </div>
        </div>

    )
}
export default HeaderLeft;
