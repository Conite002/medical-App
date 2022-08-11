import React from 'react'

import logo from '../../assets/images/logo.png'

import sidebar_items from '../../assets/JsonData/sidebar_routesSec.json'



import { Link } from 'react-router-dom'

import './sidebar.css'

const SidebarItem = props =>{

  const active = props.active ? 'active' : ''
  
  return(
    <div className="sidebar__item">
      <div className={`sidebar__item-inner ${active}`} >
        <i className={props.icon}></i>
        <span>
          {props.title}
        </span>
      </div>
    </div>
  )
}
const Sidebar = props => {
  const activeItem = sidebar_items.findIndex(item => item.route === (props.location.pathname || null))
  // const activeItem = sidebar_items.findIndex(item => {if(props){item.route === props.location.pathname} })


  return (
    <div className='sidebar'>
      <div className="sidebar__logo">
        <img src={logo} alt="Rom logo" /> CLINIQ
      </div>
      {
        sidebar_items.map((item, index) =>(
          <Link to={item.route} key={index} >
            <SidebarItem
              title = {item.display_name}
              icon =  {item.icon}
              active={index === activeItem} 
            />
          </Link>
        ))
      }
    </div>
  )
}

export default Sidebar