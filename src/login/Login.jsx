import React, { useState, useEffect} from 'react'
import {useNavigate} from "react-router-dom"
import { login, useAuth,  logout } from '../firebase'
import { UseAuthUser } from './UseAuthUser'
import './login.css'
import instrument from '../assets/img_personnel/18.png'


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
  const navigate = useNavigate();

  const [isgood, setIsgood]=useState(false)  

  if (!isgood) {
    navigate('/login');
    } else {
      // return (
      //   <div>
      //     <p>Welcome to your Dashboard</p>
      //   </div>
      // );
      navigate('/');
    }

  return (
    <div className="section">
      <div className="container-fluid">
        <div className="row">

            <div className="col-md-4 content-text">
              <div className="logo"><h4>Clinique</h4></div>
              <h1>Olory TOGBE</h1>
              <div className="virus imgvirus1"><img className="" src={instrument}/></div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur laborum
              </p>
              <div className="virus imgvirus2"><img className="" src={instrument}/></div>


            </div>
            
            <div className="col-md-5 content-form">
              <form action="">
                <div className="row row-title"><h5>Connexion</h5></div>
                <div className="row row-input">
                  <input type="email" placeholder="Email" name="email" id="" onChange={ (e) => setEmail(e.target.value) }/>
                </div>
                <div className="row row-input">
                  <input type="password" placeholder="Password" name="password" id="" onChange={ (e) => setPassword(e.target.value) } />
                </div>
                <div className="row sub">
                  <button type="submit" handleAction={ (e) => handleaction(e)} >Se connecter</button>
                </div>
              </form>
              <div className="virus"><img className="imgvirus" src={instrument}/></div>

            </div>

            <div className="col-md-3 content-form img">
              {/*<img src={instrument}/>*/}

            </div>
        </div>
      </div>
    </div>
  )
}

export default Login;