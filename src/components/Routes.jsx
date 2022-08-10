
import React from 'react'
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Consultation from '../pages/Consultations'
import Traitements from '../pages/Traitements'
import Planing from '../pages/Planing'
import Urgences from '../pages/Urgences'
import Analyses from '../pages/Analyses'
import Patients from '../pages/Patients'
import Login from "../login/Login"

const Routes = () => {
  return (
    <browser>
          <Route path= '/login' exact component={Login} />
          <Route path= '/dashboard' exact  component={Dashboard}/>
          <Route path= '/consultations' exact  component={Consultation}/>
          <Route path= '/traitements' exact  component={Traitements} />
          <Route path= '/planing'  exact component={Planing} />
          <Route path= '/urgences' exact component={Urgences} />
          <Route path= '/analyses' exact component={Analyses} />
          <Route path= '/patients' exact component={Patients} />
          <Redirect path= '/'  to="/dashboard" />

    </browser>
    )
}

export default Routes