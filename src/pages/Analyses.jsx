import React from 'react'

import laboratory from '../assets/icons/icons-64-white/laboratory.png'

const Analyses = () => {
  return (
    <div>
      <div className="row analyse-card">
        <div className="col-2 laboratory">
          <span>3 news</span>
          <div>
          <img src={laboratory} alt="" />
          </div>
          <h5>Résultats des analyses</h5>
        </div>
        
      </div>
    </div>
  )
}

export default Analyses