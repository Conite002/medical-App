import React from 'react'
import urgence_room from '../assets/imagecv/2.png'
import CustomChartsPie from '../components/chartCustom/CustomChartsPie'
import CustomChart from '../components/chartCustom/CustomChart'
import CustomDunots from '../components/chartCustom/CustomDunots'

const Urgences = () => {
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <div className="card">
          <div className="card__header">
            <h4>Urgences</h4>
          </div>
            <div className="card__body ">
              {/* <img src={urgence_room} alt="" /> */}
             
              <div className="row">
                <div className="left  col-4">
                  <div className="row">
                    <div className="card bg-bleu">
                      <h4>Urgences adultes</h4>

                    
                    </div>
                  </div>

                  <div className="row">
                    <div className="card bg-indigo">
                      <h4>Urgences gynécologiques</h4>
                      

                    </div>
                  </div>

                  <div className="row">
                    <div className="card bg-yellow-second">
                      <h4>Urgences psychiatriques</h4>

                    </div>
                  </div>
                  
                </div>
                <div className="right col-4">
                 
                  <CustomDunots
                    series = {[44, 55, 41, 25, 87]}
                    labels =  {['A', 'B', 'C', 'D', 'E']}

                  />
                </div>

                <div className="col-4">
                  <div className="row">
                    <div className="card bg-vert">
                      <h4>Urgences tête et cou</h4>

                    
                    </div>
                  </div>

                  <div className="row">
                    <div className="card">
                      <h4>Urgences gynécologiques</h4>
                      

                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <div className="card">
            <div className="card__header"></div>
            <div className="card__body"></div>
            <div className="card__footer"></div>
          </div>
        </div>

        <div className="col-4">
          <div className="card">
            <div className="card__header"></div>
            <div className="card__body"></div>
            <div className="card__footer"></div>
          </div>
        </div>

        <div className="col-4">
          <div className="card">
            <div className="card__header">
            
            </div>
            <div className="card__body"></div>
            <div className="card__footer"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Urgences