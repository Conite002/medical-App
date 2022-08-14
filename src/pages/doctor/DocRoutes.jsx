
import React from 'react'
import { Router, Route, Switch, BrowserRouter, Redirect } from 'react-router-dom'

import Dashboard from './Dashboard'
import Consultation from './Consultations'
import Traitements from './Traitements'
import Planing from './Planing'
import Urgences from './Urgences'
import Analyses from './Analyses'
import Patients from './Patients'
import Parametres from './Parametres'

import Login from "../../login/Login"

const Routes = () => {
  console.log("doctor route running")

  return (
    <div>
    <Switch>
          {/*<Route path= '/login' exact component={Login} />*/}
          <Route path= '/doctor' exact  component={Dashboard}/>
          <Route path= '/doctor/consultations' exact  component={Consultation}/>
          <Route path= '/doctor/traitements' exact  component={Traitements} />
          <Route path= '/doctor/planing'  exact component={Planing} />
          <Route path= '/doctor/urgences' exact component={Urgences} />
          <Route path= '/doctor/analyses' exact component={Analyses} />
          <Route path= '/doctor/patients' exact component={Patients} />
          <Route path= '/doctor/parametres' exact component={Parametres} />
          <Redirect path= '/'  to="/doctor" />

    </Switch>
    </div>
    )
}

export default Routes