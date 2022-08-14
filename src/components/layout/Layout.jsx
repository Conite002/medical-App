import React, { useState } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import './layout.css'

// import SidebarDoc from '../sidebar/SidebarDoc'
// import SidebarSec from '../sidebar/SidebarSec'
import TopNav from '../topnav/TopNav'
import Login from '../../login/Login'
import SecRoutes from '../../pages/secretaire/SecRoutes'
import {useAuth} from '../../firebase.js'
import {userRessource, infoUser, userRoute} from '../../login/ConfigUser'


const Layout = () => {
  const id = (props) =>{ 
    if(props == undefined){
      return null;
    }else{
       return props.uid;
    }

  }
  const useruuid = id(useAuth());
  return (
    <BrowserRouter>
        <Route  
            render={ (props) => (
                <div>
                    <div className='layout'>
                        {
                            (() =>{
                                if(useruuid){
                                    return userRessource[useruuid](props);
                                }
                                else{
                                    return null;
                                }
                            })()
                        }
                        <div className="layout__content">
                            <TopNav/>
                            <div className="layout__content-main">
                                {
                                    (() => {
                                        if (useruuid) {
                                            return userRoute[useruuid](props);
                                        }
                                         else {
                                            return null;
                                        }
                                    })()
                                }
                            </div>
                        </div>
                    </div>
                </div>
            
            )} 
        />
        
        {/* <Link to="/today"/> // renders <a href="/calendar/today"> */}
        {/* <Link to="/tomorrow"/> // renders <a href="/calendar/tomorrow"> */}

    
    </BrowserRouter>
  )
}

export default Layout



// <Route exact path="/secretary" 
//             render={ (props) => (
//                 <div>
//                     <div className='layout'>
//                         <Sidebar {...props}/>
//                         <div className="layout__content">
//                             <TopNav/>
//                             <div className="layout__content-main">
//                                 <SecRoutes/>
//                                 {
//                                     (() => {
//                                         console.log(status)
//                                         console.log({status})
//                                         if (status.localeCompare("momo")) {
//                                             return <Doctor {...props} />;
//                                         } else {
//                                             return <Login />;
//                                         }
//                                     })()
//                                 }
//                             </div>
//                         </div>
//                     </div>
//                 </div>
            
//             )} 