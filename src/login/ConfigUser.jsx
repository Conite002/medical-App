import React, { useState } from "react";
import SidebarDoc from '../components/sidebar/SidebarDoc'
import SidebarSec from '../components/sidebar/SidebarSec'
import SecRoutes from '../pages/secretaire/SecRoutes'
import DocRoutes from '../pages/doctor/DocRoutes'
export const infoUser = [];
infoUser['9Rqv93ODj3RPec8F3nJZWWtfDDC2'] = 'doctor';
infoUser['fYQOpZbq2qbuobTaTbPSrtpYmuT2'] = 'secretary';
infoUser['36wbsvO0dJgU5Q8piHaMaQd1rn92'] = 'laborantin';

export const userRessource = [];
userRessource['9Rqv93ODj3RPec8F3nJZWWtfDDC2'] = (props)=>{return <SidebarDoc {...props}/>};
userRessource['fYQOpZbq2qbuobTaTbPSrtpYmuT2'] = (props)=>{return <SidebarSec {...props}/>};
userRessource['36wbsvO0dJgU5Q8piHaMaQd1rn92'] = (props)=>{return <SidebarDoc {...props}/>};

export const userRoute = [];
userRoute['9Rqv93ODj3RPec8F3nJZWWtfDDC2'] = (props)=>{return <DocRoutes {...props}/>};
userRoute['fYQOpZbq2qbuobTaTbPSrtpYmuT2'] = (props)=>{return <SecRoutes {...props}/>};
