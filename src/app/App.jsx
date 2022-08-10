import { useRef, useState } from "react";
import { useLocation, useHistory, BrowserRouter, Route, Router } from "react-router-dom";
import Layout from "../components/layout/Layout";

import { signup, login, logout, useAuth } from "../firebase";
import Login from "../login/Login";

export default function App() {

  const AuthButton = props => {
  
    if (props) {
      
      return <Layout/>;
    } else {
      return <Login />;
    }
  };

  return(
    <BrowserRouter>
      <Route exact path="/">
        <AuthButton props ={true} />
      </Route>
      <Route exact path="/login" component={Login} />
    </BrowserRouter>
  );
}