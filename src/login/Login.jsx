import React, { useState, useEffect } from 'react'
import { login, useAuth,  logout } from '../firebase'
import { UseAuthUser } from './UseAuthUser'
import './login.css'


const Login = (props) => {

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const handleaction = (e)=>{
    e.preventDefault();
    
    try {
      const ans = login(email, password);
      console.log(ans);
    } catch (error) {
      console.log("ressource not found");

      
    }
    
  }

  const Dashboard = () => {
    const [authenticated, setauthenticated] = useState(null);
    useEffect(() => {
      const loggedInUser = localStorage.getItem("authenticated");
      if (loggedInUser) {
        setauthenticated(loggedInUser);
      }
    }, []);
    if (!authenticated) {
    // Redirect
    } else {
      return (
        <div>
          <p>Welcome to your Dashboard</p>
        </div>
      );
    }
  };

  return (
    <div className="section">
      <div className="container-fluid">
        <div className="row"><span>LOGO</span></div>
        <div className="row">
            <div className="col-md-4 content-text">
              
              <h4>Clinique</h4>
              <h1>Olory TOGBE</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur laborum
                 deserunt eveniet sequi? Incidunt nam fugit cum tempora eveniet fuga reiciendis
                  perferendis quasi quam perspiciatis? Asperiores eaque dolorum quidem eum.
              </p>
            </div>

            <div className="col-md-4 offset-md-4 content-form">
              <form action="">
                <span><h5>Connexion</h5></span>
                <div className="row row-input">
                  <input type="email" name="email" id="" onChange={ (e) => setEmail(e.target.value) }/>
                </div>
                <div className="row row-input">
                  <input type="password" name="password" id="" onChange={ (e) => setPassword(e.target.value) } />
                </div>
                <div className="row sub">
                  <button type="submit" handleAction={ (e) => handleaction(e)} >Se connecter</button>
                </div>
              </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Login;