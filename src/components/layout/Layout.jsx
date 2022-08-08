import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import './layout.css'

import Routes from '../Routes'

import Sidebar from '../sidebar/Sidebar'
import TopNav from '../topnav/TopNav'
import Login from '../../login/Login'
import UseAuthUser from '../../login/UseAuthUser'



const Layout = () => {
  return (
    <BrowserRouter>
        <Route exact path="/" render={ (props) => (
            <div>
                <div className='layout'>
                    {/* sidebar on conditionst */}
                    <Sidebar {...props}/>
                    <div className="layout__content">
                        {/* topnav with props */}
                        <TopNav/>
                        <div className="layout__content-main">
                            <Routes/>
                        </div>
                    </div>
                </div>
            </div>
           
        )} 
        />
        <Route exact path="/doctor" component={Login} />
        <Route exact path="/secretaire" component={Login} />
        <Route exact path="/login" component={Login} />
        {/* <Link to="/today"/> // renders <a href="/calendar/today"> */}
        {/* <Link to="/tomorrow"/> // renders <a href="/calendar/tomorrow"> */}

    
    </BrowserRouter>
  )
}

export default Layout