import React from 'react'

const ConsultationCardTwo = () => {
  return (
    <div>
        <div className="card consultation-background bg-bleu">
            <div className="card__body">
                <div className="top">
                    <div className="icon">
                        <i className="bx bxs-arch"></i>
                    </div>
                    <div className="text">
                        <h5>Paludisme</h5>
                        <p>8:00 AM  -  4:00 PM</p>
                        <h6>120 participants</h6>
                    </div>
                </div>
                <div className="bottom">
                    <div className="circleIcon">
                        <span>RM</span>
                    </div>
                    <div className="circleIcon bg-vert">
                        <span>JK</span>
                    </div>
                    <div className="circleIcon bg-rose">
                        <span>PS</span>
                    </div>
                    <div className="circleIcon bg-yellow">
                        <span>MT</span>
                    </div>

                    <div className="circleIcon bg-indigo">
                        <span><h3>+50</h3></span>
                    </div>

                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default ConsultationCardTwo