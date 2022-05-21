import React from 'react'
import Dropdown from '../dropdown/Dropdown'
import optionPatient from '../../assets/JsonData/option-patient.json'
import { Link } from 'react-router-dom'

import './contentInfo.css'

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


const renderUserMenu = (item, index) => (
  <Link to ='/' key={index}>
      <div className="notification-item">
          <i className= {item.icon} ></i>
          <span> {item.content} </span>
      </div>
  </Link>
)


const ContentInfo = props => {
  console.log(props.image)
  return (
    <div>
        <div className="row patient">

          <div className="patient-info-icon col-3">
            <img src={props.image} alt="" />
          </div>

          <div className="patient-info-details col-7">

            <div className="patient-info-details-name">
              { props.name }
            </div>

            <div className="patient-info__row  row">
                <div className="col-4"> <span> Birth: </span>{ props.birth }</div>
                <div className="col-4"> <span> Gendre: </span>{ props.gendre }</div>
                <div className="col-4"> <span> Addresse: </span>{ props.address }</div>
            </div>

            <div className="patient-info__row row">
                <div className="col-4"> <span> Email: </span>{ props.email }</div>
                <div className="col-4"> <span> Contact: </span>{ props.contact }</div>
                <div className="col-4"> <span> Language: </span>{ props.language }</div>
            </div>

            <div className="patient-info__row row">
                <div className="col-4"> <span> Poids: </span>{ props.poids }</div>
                <div className="col-4"> <span> Pression: </span>{ props.pression }</div>
                <div className="col-4"> <span> Temperature: </span>{ props.temperature }</div>
            </div>
            
            {/* <div className="patient-info__row row">
                <div className="col-4"> <span> Groupe sanguins: </span>{ props.poids }</div>
                <div className="col-4"> <span> Allergies: </span>{ props.allergies }</div>
                <div className="col-4"> <span> Maladies: </span>{ props.maladies }</div>
            </div> */}
          </div>

          <div className="col-2">
            <Dropdown
                customToggle={() => renderUserToggle(curr_user)}
                contentData={optionPatient}
                renderItems = {(item, index) =>renderUserMenu(item, index)}
            />
          </div>

        </div>
    </div>
  )
}

export default ContentInfo