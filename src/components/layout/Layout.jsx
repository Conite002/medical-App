import React, { useState } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import './layout.css'

import Routes from '../Routes'

import SidebarDoc from '../sidebar/SidebarDoc'
import SidebarSec from '../sidebar/SidebarSec'
import TopNav from '../topnav/TopNav'
import Login from '../../login/Login'
import UseAuthUser from '../../login/UseAuthUser'
import SecRoutes from '../../pages/secretaire/SecRoutes'



const Layout = () => {


    const [status, setStatus] = useState("azerty");        

  return (
    <BrowserRouter>
        <Route  
            render={ (props) => (
                <div>
                    <div className='layout'>
                        {
                            (() => {
                                console.log(status)
                                console.log(status==="azerty" )
                                if (status==="azerty") {
                                    return <SidebarSec {...props}/>;
                                } 
                                else if(status === "lololo") {
                                    return <SidebarDoc {...props}/>;
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
                                        console.log(status)
                                        console.log(status==="azoerty" )
                                        if (status==="azerty") {
                                            return <SecRoutes/>;
                                        }
                                        else if (status==="lololo") {
                                            return <Routes />;
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