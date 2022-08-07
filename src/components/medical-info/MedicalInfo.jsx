import React from 'react'

import Dropdown from '../dropdown/Dropdown'

import './medicalinfo.css'

import { useSelector, useDispatch  } from 'react-redux' 

import Chart from 'react-apexcharts'



const curr_user = {
  display_name: 'options',
  image: "bx bx-cog"
}

const renderUserToggle = (user) => (
  <div className="option">
      <div className="option-icon">
          <i className= {user.image}></i>
      </div>
      <div className="option-name">
          {user.display_name}
      </div>
  </div>
)


const MedicalInfo = props => {
  const themeReducer = useSelector(state => state.ThemeReducer.mode)
  console.log(props.color)
  return (
    <div>
        <div className="content row">
            <div className="info-detail">

              <div className="title">
               {props.title}
              </div>

              <div className={`value ${props.color}`}>
                <span> {props.value} </span>
                <i className="bx bx-user"></i>
              </div>
              
              <div className="level">
                <span> {props.level} </span>
              </div>

            </div>

            <Dropdown 

            />
          </div>
        

    </div>
  )
}

export default MedicalInfo