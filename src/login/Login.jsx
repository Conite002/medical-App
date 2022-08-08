import React, { useState, useEffect } from 'react'
import { login, useAuth,  logout } from '../firebase'
import { UseAuthUser } from './UseAuthUser'


const Login = (props) => {

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const handleAction = (e)=>{
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

  console.log(email);
  return (
    <div className="section">
      <div className="Container">
        <div className="row">
            <div className="col-md-4 content-text">
              <h4>Clinique</h4>
              <h1>Olory TOGBE</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur laborum
                 deserunt eveniet sequi? Incidunt nam fugit cum tempora eveniet fuga reiciendis
                  perferendis quasi quam perspiciatis? Asperiores eaque dolorum quidem eum.
              </p>
            </div>
            <div className="col-md-3 content-circle">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="col-md-5 content-form">
              <form action="">
                <h5>Connexion</h5>
                <div className="row">
                  <input type="email" name="email" id="" onChange={ (e) => setEmail(e.target.value) }/>
                </div>
                <div className="row">
                  <input type="password" name="password" id="" onChange={ (e) => setPassword(e.target.value) } />
                </div>
                <div className="row">
                  <button type="submit" handleAction={ (e) => handleAction(e)} >Se connecter</button>
                </div>
              </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Login;