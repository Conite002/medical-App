
import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Consultation from '../pages/Consultations'
import Traitements from '../pages/Traitements'
import Planing from '../pages/Planing'
import Urgences from '../pages/Urgences'
import Analyses from '../pages/Analyses'
import Patients from '../pages/Patients'
import Secretaire_home from '../pages/secretaire/Accueil'
import Secretaire_enregistrement from '../pages/secretaire/Ajout'
import Liste_patients from '../pages/secretaire/Liste'


const Routes = () => {
  return (
    <Switch>
        <Route path= '/secretaire' exact component={Secretaire_home} />
        <Route path= '/secretaire/liste' exact component={Liste_patients} />
        <Route path= '/secretaire/enregistrement' exact component={Secretaire_enregistrement} />
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