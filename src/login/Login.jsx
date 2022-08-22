import React, { useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom' 
import { login, useAuth,  logout, isConnected ,writeUserData } from '../firebase'
import  {infoUser} from './ConfigUser'
import './login.css'
import instrument from '../assets/img_personnel/18.png'
import Layout from '../components/layout/Layout'

const Login = (props) => {

  const id = (props) =>{ 
    if(props == undefined){
      return null;
    }else{
       return props.uid;
    }

  }
  const auth =  useAuth();
  const [ badlogin, setBadlogin ] = useState(false);
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const submitAction = (e)=>{
    e.preventDefault();
      const ans = login(email, password);
      // console.log(ans);
      ans.then((userCredential) => {
        const user = userCredential.user;
        window.location.href = "/";
        setBadlogin(false);
      })
      .catch((error) => {

        setBadlogin(true);
        console.log(error)

      });
      
    
  }

  const us = useAuth();
  // return us ? (<Layout />
  return (
      <div className="section login-img ">
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
                  <div className="badlogin" >{badlogin ? <span>Erreur d'authentification</span> : " "}</div>

                  <div className="row row-input">
                    <input type="email" placeholder="Email" name="email" id="" onChange={ (e) => setEmail(e.target.value) }/>
                  </div>
                  <div className="row row-input">
                    <input type="password" placeholder="Password" name="password" id="" onChange={ (e) => setPassword(e.target.value) } />
                  </div>
                  <div className="row sub">
                    <button type="submit" onClick={ (e) => submitAction(e)} >Se connecter</button>
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