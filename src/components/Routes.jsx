import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Consultation from '../pages/Consultations'
import Traitements from '../pages/Traitements'
import Planing from '../pages/Planing'
import Urgences from '../pages/Urgences'
import Analyses from '../pages/Analyses'
import Patients from '../pages/Patients'

const Routes = () => {
  return (
    <Switch>
        <Route path= '/' exact  component={Dashboard}/>
        <Route path= '/consultations'  component={Consultation}/>
        <Route path= '/traitements'  component={Traitements} />
        <Route path= '/planing'  component={Planing} />
        <Route path= '/urgences'  component={Urgences} />
        <Route path= '/analyses'  component={Analyses} />
        <Route path= '/patients'  component={Patients} />
    </Switch>
    )
}

export default Routes