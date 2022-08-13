import React, { useState } from "react";
import SidebarDoc from '../components/sidebar/SidebarDoc'
import SidebarSec from '../components/sidebar/SidebarSec'
import SecRoutes from '../pages/secretaire/SecRoutes'
import DocRoutes from '../components/DocRoutes'
export const infoUser = [];
infoUser['UrR6ggvtFJXnipR14usILR1Oox12'] = 'dashboard';
infoUser['GJxVv6Ex4UeHznkJTtTaAXwdGUz1'] = 'secretary';
infoUser['36wbsvO0dJgU5Q8piHaMaQd1rn92'] = 'laborantin';

export const userRessource = [];
userRessource['UrR6ggvtFJXnipR14usILR1Oox12'] = (props)=>{return <SidebarDoc {...props}/>};
userRessource['GJxVv6Ex4UeHznkJTtTaAXwdGUz1'] = (props)=>{return <SidebarSec {...props}/>};
userRessource['36wbsvO0dJgU5Q8piHaMaQd1rn92'] = (props)=>{return <SidebarDoc {...props}/>};

export const userRoute = [];
userRoute['UrR6ggvtFJXnipR14usILR1Oox12'] = (props)=>{return <DocRoutes {...props}/>};
userRoute['GJxVv6Ex4UeHznkJTtTaAXwdGUz1'] = (props)=>{return <SecRoutes {...props}/>};
