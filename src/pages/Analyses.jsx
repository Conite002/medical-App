import React from 'react'

import laboratory from '../assets/icons/icons-64-white/laboratory.png'
import LaboCard from '../components/labo-card/LaboCard'

const Analyses = () => {
  return (
    <div>
      <div className="row analyse-card">
          <div className="col-12">
              <div className="card"></div>
          </div>
      </div>

      <div className="row">

            <div className="col-3">
              <LaboCard
                bgColor = {"gradient-vert"}
                description = {"Test concernant les variantes x"}
                title = {"Parasitose"}

              />
            </div>
            <div className="col-3">
              <LaboCard
                bgColor = {"gradient-blue"}
                description = {"Test concernant les variantes x"}
                title = {"Rougeole"}

              />
            </div>
            <div className="col-3">
              <LaboCard
                bgColor = {"gradient-red"}
                description = {"Test concernant les variantes x"}
                title = {"Hépathite"}

              />
            </div>
            <div className="col-3">
              <LaboCard
                bgColor = {"gradient-blueLight"}
                description = {"Test concernant les variantes x"}
                title = {"Paludisme"}
              />
            </div>
            
          </div>
    </div>
  )
}

export default Analyses