import React, { useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom' 
import { login, useAuth,  logout, isConnected } from '../firebase'
import  {infoUser} from './ConfigUser'
import './login.css'
import instrument from '../assets/img_personnel/18.png'
import Layout from '../components/layout/Layout'

const NotFound = (props) => {

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

  return (
    <div className="section">
      <div className="container-fluid">
        <div className="row notfound">
          <h1>Page not found</h1>
        </div>
      </div>
    </div>
    )
}

export default NotFound;