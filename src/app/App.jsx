
import { useRef, useState } from "react";
import { BrowserRouter, Route, Router, Redirect } from "react-router-dom";
import Layout from "../components/layout/Layout";

import { signup, login, logout, useAuth } from "../firebase";
import Login from "../login/Login";
import DocAccueil from "../pages/doctor/Dashboard"
import SecAccueil from "../pages/secretaire/Accueil"
import TopNav from "../components/topnav/TopNav"
import SecRoutes from "../pages/secretaire/SecRoutes"
import Ajout from "../pages/secretaire/Ajout"
import Liste from "../pages/secretaire/Liste"
import Parametres from "../pages/secretaire/Parametres"
import Programmes from "../pages/secretaire/Programmes"
import Patients from "../pages/secretaire/Patients"
import Urgences from "../pages/secretaire/Urgences"
import SidebarSec from "../components/sidebar/SidebarSec"
import SidebarDoc from "../components/sidebar/SidebarDoc"
import DocConsultations from "../pages/doctor/Consultations"
import DocTraitements from "../pages/doctor/Traitements"
import DocAnalyses from "../pages/doctor/Analyses"
import DocPlaning from "../pages/doctor/Planing"
import DocPatients from "../pages/doctor/Patients"
import DocUrgences from "../pages/doctor/Urgences"
import DocParametres from "../pages/doctor/Parametres"
import Notfound from "../login/NotFound"

export default function App() {

  const AuthButton = props => {
  
    if (props) {
      
      return <Layout/>;
    } else {
      return <Login />;
    }
  };

const isLoggedIn = useAuth();
console.log(isLoggedIn)

  return isLoggedIn ? (
    <BrowserRouter>

      <Route exact path="/" component={Layout}/>
      <Route exact path="/login" component={Login} />
      <Route exact path="/secretary" render={ (props) => (
        <div>
            <div className='layout'>
                <SidebarSec {...props}/>
                <div className="layout__content">
                    <TopNav {...props}/>
                    <div className="layout__content-main">
                        <SecRoutes/>
                    </div>
                </div>
            </div>
        </div>
        )}
      />
      <Route exact path="/secretary/ajout" render={ (props) => (
        <div>
            <div className='layout'>
                <SidebarSec {...props}/>
                <div className="layout__content">
                    <TopNav {...props}/>
                    <div className="layout__content-main">
                        <Ajout/>
                    </div>
                </div>
            </div>
        </div>
        )}
      />
      <Route exact path="/secretary/liste" render={ (props) => (
        <div>
            <div className='layout'>
                <SidebarSec {...props}/>
                <div className="layout__content">
                    <TopNav {...props}/>
                    <div className="layout__content-main">
                        <Liste/>
                    </div>
                </div>
            </div>
        </div>
        )}
      />

      <Route exact path="/secretary/parametres" render={ (props) => (
        <div>
            <div className='layout'>
                <SidebarSec {...props}/>
                <div className="layout__content">
                    <TopNav {...props}/>
                    <div className="layout__content-main">
                        <Parametres/>
                    </div>
                </div>
            </div>
        </div>
        )}
      />
      <Route exact path="/secretary/urgences" render={ (props) => (
        <div>
            <div className='layout'>
                <SidebarSec {...props}/>
                <div className="layout__content">
                    <TopNav {...props}/>
                    <div className="layout__content-main">
                        <Urgences/>
                    </div>
                </div>
            </div>
        </div>
        )}
      />
      <Route exact path="/secretary/planing" render={ (props) => (
        <div>
            <div className='layout'>
                <SidebarSec {...props}/>
                <div className="layout__content">
                    <TopNav {...props}/>
                    <div className="layout__content-main">
                        <Programmes/>
                    </div>
                </div>
            </div>
        </div>
        )}
      />
      <Route exact path="/secretary/patients" render={ (props) => (
        <div>
            <div className='layout'>
                <SidebarSec {...props}/>
                <div className="layout__content">
                    <TopNav {...props}/>
                    <div className="layout__content-main">
                        <Patients/>
                    </div>
                </div>
            </div>
        </div>
        )}
      />
      <Route exact path="/doctor" render={ (props) => (
        <div>
            <div className='layout'>
                <SidebarDoc {...props}/>
                <div className="layout__content">
                    <TopNav {...props}/>
                    <div className="layout__content-main">
                        <DocAccueil/>
                    </div>
                </div>
            </div>
        </div>
        )}
      />
      <Route exact path="/doctor/consultations" render={ (props) => (
        <div>
            <div className='layout'>
                <SidebarDoc {...props}/>
                <div className="layout__content">
                    <TopNav {...props}/>
                    <div className="layout__content-main">
                        <DocConsultations/>
                    </div>
                </div>
            </div>
        </div>
        )}
      />
      
      <Route exact path="/doctor/traitements" render={ (props) => (
        <div>
            <div className='layout'>
                <SidebarDoc {...props}/>
                <div className="layout__content">
                    <TopNav {...props}/>
                    <div className="layout__content-main">
                        <DocTraitements/>
                    </div>
                </div>
            </div>
        </div>
        )}
      />
      <Route exact path="/doctor/analyses" render={ (props) => (
        <div>
            <div className='layout'>
                <SidebarDoc {...props}/>
                <div className="layout__content">
                    <TopNav {...props}/>
                    <div className="layout__content-main">
                        <DocAnalyses/>
                    </div>
                </div>
            </div>
        </div>
        )}
      />

      <Route exact path="/doctor/planing" render={ (props) => (
        <div>
            <div className='layout'>
                <SidebarDoc {...props}/>
                <div className="layout__content">
                    <TopNav {...props}/>
                    <div className="layout__content-main">
                        <DocPlaning/>
                    </div>
                </div>
            </div>
        </div>
        )}
      />

      <Route exact path="/doctor/patients" render={ (props) => (
        <div>
            <div className='layout'>
                <SidebarDoc {...props}/>
                <div className="layout__content">
                    <TopNav {...props}/>
                    <div className="layout__content-main">
                        <DocPatients/>
                    </div>
                </div>
            </div>
        </div>
        )}
      />

      <Route exact path="/doctor/urgences" render={ (props) => (
        <div>
            <div className='layout'>
                <SidebarDoc {...props}/>
                <div className="layout__content">
                    <TopNav {...props}/>
                    <div className="layout__content-main">
                        <DocUrgences/>
                    </div>
                </div>
            </div>
        </div>
        )}
      />

      <Route exact path="/doctor/parametres" render={ (props) => (
        <div>
            <div className='layout'>
                <SidebarDoc {...props}/>
                <div className="layout__content">
                    <TopNav {...props}/>
                    <div className="layout__content-main">
                        <DocParametres/>
                    </div>
                </div>
            </div>
        </div>
        )}
      />
      <Route exact path="*" component={Notfound} />
    </BrowserRouter>
  ) : (<Login />) ;
}