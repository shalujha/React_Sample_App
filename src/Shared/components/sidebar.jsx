import React, { useState,useContext } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './sidemenudata';
import { AuthContext } from '../../context/auth-context';

function createItem(item,index){
  return (
    <li key={index} className={item.cName}>
      <Link to={item.path}>
        <span>{item.title}</span>
      </Link>
    </li>
  );  
}

function Sidebar() {
  const auth=useContext(AuthContext);
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <Link className="navbar-brand" href="#">Your Places</Link>
        </div>

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items'>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars' onClick={showSidebar}>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              console.log("In sidebar : "+ auth.isLoggedin);
              if(item.title=="MY PLACES"){
                return auth.isLoggedin && createItem(item,index); 
              }else if(item.title=="AUTHENTICATE"){
                return !auth.isLoggedin && createItem(item,index);
              }else if(item.title=="ADD PLACE"){
                return auth.isLoggedin && createItem(item,index);
              }else{
                return createItem(item,index);
              }
            })}
          </ul>
        </nav>
    </>
  );
}

export default Sidebar;
