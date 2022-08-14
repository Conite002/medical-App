import React from 'react'
import laboratory from '../../assets/icons/icons-64-white/laboratory.png'
import QuaterCircle from '../../components/chartCustom/QuaterCircle'
import LaboCard from '../../components/labo-card/LaboCard'

const Analyses = () => {
  return (
    <div>
      <div className="row analyse-card">
          <div className="col-12">
              <div className="card">
                <div className="card__header">
                  <h4> ANALYSE</h4>
                </div>
              </div>
          </div>
      </div>
      <div className="card">
        <div className="card__header">
          <h5>ANALYSES EN COURS</h5>
        </div>
        <div className="row">

          <div className="col-3">
            <LaboCard
              bgColor = {"gradient-vert"}
              description = {"Taux de succès du test"}
              title = {"Parasitose"}

            />
          </div>
          <div className="col-3">
            <LaboCard
              bgColor = {"gradient-blue"}
              description = {"Taux de succès du test"}
              title = {"Rougeole"}

            />
          </div>
          <div className="col-3">
            <LaboCard
              bgColor = {"gradient-red"}
              description = {"Taux de succès du test"}
              title = {"Hépathite"}

            />
          </div>
          <div className="col-3">
            <LaboCard
              bgColor = {"gradient-blueLight"}
              description = {"Taux de succès du test"}
              title = {"Paludisme"}
            />
          </div>
          
        </div>
      </div>
      
      <div className="card">
        <div className="card__header">
          <h5>RESULTATS D'ANALYSES</h5>
        </div>
        <div className="row">

          {/* <div className="col-3">
            <LaboCard
              bgColor = {"gradient-vert"}
              description = {"Taux de succès du test"}
              title = {"Parasitose"}
              
            />
          </div>
          <div className="col-3">
            <LaboCard
              bgColor = {"gradient-blue"}
              description = {"Taux de succès du test"}
              title = {"Rougeole"}

            />
          </div>
          <div className="col-3">
            <LaboCard
              bgColor = {"gradient-red"}
              description = {"Taux de succès du test"}
              title = {"Hépathite"}

            />
            <QuaterCircle  />
          </div> */}
          <div className="col-3">
            <QuaterCircle
              series = {[70]}
              labels = {['PARASITOSE']}

            />
          </div>

          <div className="col-3">
            <QuaterCircle
              series = {[68]}
              labels = {['ROUGEOLE']}
            />
          </div>

          <div className="col-3">
            <QuaterCircle
              series = {[48]}
              labels = {['HÉPATHITE']}
            />
          </div>

          <div className="col-3">
            <QuaterCircle
              series = {[90]}
              labels = {['PALUDISME']}
            />
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Analyses