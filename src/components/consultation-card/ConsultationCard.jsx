import React from 'react'

import './consultationcard.css'

import avatar_1 from '../../assets/images/avatar-1.jpg';





const ConsultationCard = props => {

  return (
    <div className='consultation-card'>
        <div className="consultation-card__info-person">
            <div className="consultation-card__info-person__icon">
                {/* <img src={props.image} alt="" /> */}
                <img src={avatar_1} alt="" />
            </div>
            <div className="consultation-card__info-person__name-email">
                <div className="name"> 
                    <span> {props.name} </span>
                </div>
                <div className="email">
                    <span> {props.email} </span>
                </div>
            </div>
        </div>
        <div className="consultation-card__info-consult">

            <div className="consultation-card__info-consult__text">
                <i className="icon"></i>
                <span> {props.doctor} </span>
            </div>

            <div className="consultation-card__info-consult__text">
                <i className="icon"></i>
                <span> {props.location} </span>
            </div>

            <div className="consultation-card__info-consult__text">
                <i className="icon"></i>
                <span> {props.date} </span>
            </div>

            <div className="consultation-card__info-consult__text">
                <i className="icon"></i>
                <span> {props.time} </span>
            </div>

            <div className='button'>
                <button  className='confirme'> Confirmer</button>
                <button  className='cancel'> Annuler</button>
            </div>

        </div>
    </div>
  )
}

export default ConsultationCard