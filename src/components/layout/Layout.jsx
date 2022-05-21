import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import './layout.css'

import Routes from '../Routes'

import Sidebar from '../sidebar/Sidebar'
import TopNav from '../topnav/TopNav'

const Layout = () => {
  return (
    <BrowserRouter>
        <Route render={ (props) => (
            <div className='layout'>
                <Sidebar {...props}/>
                <div className="layout__content">
                    {/* topnav */}
                    <TopNav/>
                    <div className="layout__content-main">
                        <Routes/>
                    </div>
                </div>
            </div>
        )} 
        
        />
    </BrowserRouter>
  )
}

export default Layout