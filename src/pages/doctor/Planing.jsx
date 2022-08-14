import React from 'react'
import CustomSplineArea from '../../components/chartCustom/CustomSplineArea'


const chartOptions = {
  series:[{
    name: 'traitements',
    data: [40,70,20,90,36,80,30,91,60]
  },{
    name: 'Patients',
    data: [40,30,70,80,40,16,40,20,51,10]
  }],
  options:{
    color:['#6ab04c', '#2980b9'],
    chart:{
      background: 'transparent'
    },
    dataLabels:{
      enbled:false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis:{
      categories:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep']
    },
    legend:{
      position:'top'
    },
    grid : {
      show: false
    }

  }
}

const Planing = () => {
  return (
    <div>
        <div className="row">
          <div className="col-12">
            <div className="card programme-card">
            <div className="card__header">
              <h3>PROGRAMMES</h3>
            </div>
              <div className="card__body">
                <div className="row">

                  <div className="col-4">
                    <div className="card">
                      <div className="card__body position combo-vert">
                        <div className="left">
                          <i className="bx bx-user"></i>
                        </div>
                        <div className="right">
                          <h6>Reunion du jours</h6>
                          <span>22,422</span>
                        </div>
                      </div>
                      {/* <div className="card__footer">
                        <CustomSplineArea
                          options = {chartOptions.options}
                          series = {chartOptions.series}
                        />
                      </div> */}
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="card">
                      <div className="card__body position combo-rose">
                        <div className="left">
                          <i className="bx bxs-ambulance"></i>
                        </div>
                        <div className="right">
                          <h6>Hospitalisation du jour</h6>
                          <span>22,422</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="card">
                      <div className="card__body position combo-bleu">
                        <div className="left">
                          <i className="bx bx-git-repo-forked"></i>
                        </div>
                        <div className="right">
                          <h6>Consultations du jours</h6>
                          <span>22,422</span>
                        </div>
                      </div>
                    </div>
                  </div>
          

                </div>

                <div className="row">

                  <div className="col-4">
                    <div className="card">
                      <div className="card__body position combo-rose">
                        <div className="left">
                          <i className="bx bxs-ambulance"></i>
                        </div>
                        <div className="right">
                          <h6>Hospitalisation du jour</h6>
                          <span>22,422</span>
                        </div>
                      </div>
                    </div>
                  </div>


                 

                  

                  <div className="col-4">
                    <div className="card">
                      <div className="card__body position combo-bleu">
                        <div className="left">
                          <i className="bx bx-git-repo-forked"></i>
                        </div>
                        <div className="right">
                          <h6>Consultations du jours</h6>
                          <span>22,422</span>
                        </div>
                      </div>
                    </div>
                  </div>
          

                  <div className="col-4">
                    <div className="card">
                      <div className="card__body position combo-vert">
                        <div className="left">
                          <i className="bx bx-user"></i>
                        </div>
                        <div className="right">
                          <h6>Reunion du jours</h6>
                          <span>22,422</span>
                        </div>
                      </div>
                      {/* <div className="card__footer">
                        <CustomSplineArea
                          options = {chartOptions.options}
                          series = {chartOptions.series}
                        />
                      </div> */}
                    </div>
                  </div>

                </div>

              </div>
              {/* <div className="card__footer"></div> */}
            </div>
          </div>
          <div className="col-8">
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
          

          
        </div>
    </div>
  )
}

export default Planing