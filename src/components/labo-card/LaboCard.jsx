import React from 'react'
import laboImage from '../../assets/icons/icons-64-white/laboratory.png'
import './labocard.css'

const LaboCard = (props) => {
  return (
    <div>
        <div className={`card consultation-background ${props.bgColor}`}>
            <div className="card__body">
                <div className="top">
                    <div className="icon">
                        {/* <i className="bx bxs-arch"></i> */}
                        <img src= {laboImage} alt="" />
                    </div>
                    <div className="text">
                        <h5>{props.title}</h5>
                        <p>8:00 AM  -  4:00 PM</p>
                        <h6>120 participants</h6>
                    </div>
                </div>
                <div className="bottom">
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LaboCard