import React, {useState} from 'react'
import './topnav.css'
import { Link } from 'react-router-dom'
import Dropdown from '../dropdown/Dropdown'
import notifications from '../../assets/JsonData/notification.json'
import user_image from '../../assets/images/tuat.png'
import user_menu from '../../assets/JsonData/user_menus.json'
import {useAuth, logout, isConnected} from '../../firebase'
import { infoUser } from '../../login/ConfigUser'
const curr_user = {
    display_name: 'Olory TOGBE',
    image: user_image
}
const doAction = (item)=>{
    console.log(item)
}
const renderNotificationItem = (item, index) => (
    <div className="notification-item"  key={index}>
        <i className={item.icon} ></i>
        <span> {item.content} </span>
    </div>
)

const renderUserToggle = (user) => (
    <div className="topnav__right-user">
        <div className="topnav__right-user__image">
            <img src={user.image} alt="" />
        </div>
        <div className="topnav__right-user__name">
            {user.display_name}
        </div>
    </div>
)
 
const logoutHandler = (props) =>{
    if(props.content.toLowerCase() === "logout"){
        const x = logout();
        console.log("logout is running");
        window.location.href="/login";
    } 
}
const renderUserMenu = (item, index) => (
    <Link to ='#' key={index} >
        <div className="notification-item" onClick={function(e){e.preventDefault(); logoutHandler({...item})}} >
            <i className= {item.icon} ></i>
            <span> {item.content} </span>
        </div>
    </Link>
)

const TopNav = () => {
  return (
    <>      
        <div className='topnav'>
            <div className="topnav__search">
                <input type="text" placeholder='Rechercher ici'/>
                <i className="bx bx-search"></i>
            </div>
            <div className="topnav__right">
                <div className="topnav__right-item">
                    <Dropdown
                        customToggle={() => renderUserToggle(curr_user)}
                        contentData={user_menu}
                        renderItems = {(item, index) =>renderUserMenu(item, index)}
                    />
                </div>
                <div className="topnav__right-item">
                    <Dropdown
                        icon= 'bx bx-bell'
                        badge='12'
                        contentData={notifications}
                        renderItems={(item, index) => renderNotificationItem(item,index)}
                        renderFooter={ () => <Link to='/'>VIew All</Link> }
                    />
                </div>
                <div className="topnav__right-item">


                </div>
            </div>
        </div>
    </>
  )
}

export default TopNav