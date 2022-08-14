import React from 'react'
import {BrowserRouter, browser, Redirect, Route, Switch } from 'react-router-dom'
import Secretaire_home from './Accueil'
import Secretaire_enregistrement from './Ajout'
import Liste_patients from './Liste'
import Login from "../../login/Login"

const SecRoutes = () => {
  return (
    <div>
    <Switch>
        <Route path= '/secretary' exact component={Secretaire_home} />
        <Route path= '/secretary/liste' exact component={Liste_patients} />
        <Route path= '/secretary/ajout' exact component={Secretaire_enregistrement} />
        {/* <Route path= '/consultatios' y component={Consultation}/> */}
        {/* <Route path= '/planing'  component={Planing} /> */}
        {/* <Route path= '/urgences'  component={Urgences} /> */}
        <Redirect path="/" to="/secretary" />
    </Switch>
    </div>
    )
}

export default SecRoutes