import React from 'react'
import Chart from 'react-apexcharts'
import { useSelector, useDispatch  } from 'react-redux' 
import  CustomChart  from '../../components/chartCustom/CustomChart'
import CustomChartsPie from '../../components/chartCustom/CustomChartsPie'
import CustomDonuts from '../../components/chartCustom/CustomDunots'
import SplineLine from '../../components/chartCustom/SplineLine'
import { Link } from 'react-router-dom'
import Table  from '../../components/table/Table'
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


const topCustomers = {
  head :[
    'user',
    'Contact',
    'Image'
  ],
  body:[
    {
      "username":"john doe",
      "order": "490",
      "price":"bx bx-user"
    },
    {
      "username" : "frank iva",
      "order" : "250",
      "price" : "bx bx-user"
    },
    {
      "username":"frank iva",
      "over": "250",
      "price": "bx bx-user"
    },
    {
      "username" :"anthony baker",
      "order":"120",
      "price": "bx bx-user"
    }
    ,
    {
      "username" :"anthony baker",
      "order":"120",
      "price": "bx bx-user"
    }
    ,
    {
      "username" :"anthony baker",
      "order":"120",
      "price": "bx bx-user"
    }
    ,
    {
      "username" :"anthony baker",
      "order":"120",
      "price": "bx bx-user"
    }
    ,
    {
      "username" :"anthony baker",
      "order":"120",
      "price": "bx bx-user"
    }
    ,
    {
      "username" :"anthony baker",
      "order":"120",
      "price": "bx bx-user"
    }
    ,
    {
      "username" :"anthony baker",
      "order":"120",
      "price": "bx bx-user"
    }
    ,
    {
      "username" :"anthony baker",
      "order":"120",
      "price": "bx bx-user"
    }
    ,
    {
      "username" :"anthony baker",
      "order":"120",
      "price": "bx bx-user"
    }
    ,
    {
      "username" :"anthony baker",
      "order":"120",
      "price": "bx bx-user"
    }
    ,
    {
      "username" :"anthony baker",
      "order":"120",
      "price": "bx bx-user"
    }
    ,
    {
      "username" :"anthony baker",
      "order":"120",
      "price": "bx bx-user"
    }
  ]
}


const orderStatus = {
  "shipping": "primary",
  "pending": "warning",
  "paid": "success",
  "refund": "danger"
}


const renderCustomerHead = (item, index) => (
  <th key={index} >{item} </th>
)

const renderCustomerBody = (item,index) =>(
  <tr key={index} >
    <td>{item.username} </td>
    <td>{item.order} </td>
    <td><i className={item.price} ></i></td>
  </tr>
)


const Traitements = () => {

const themeReducer = useSelector(state => state.ThemeReducer.mode)
  
  return (
  <div>
    <div className='row'>
        
        <div className="col-8">
          <div className="col-12">
            <div className="card treatment">
              <div className="card__header">
                <h3>Traitements</h3>
                  {/* <Chart
                    options={themeReducer === 'theme-mode-dark' ? {
                        ...chartOptions.options,
                        theme : {mode: 'dark' }
                      } : { 
                        ...chartOptions.options,
                        theme: {mode: 'light'}
                      } 
                    }
                    series={chartOptions.series}
                    type='line'
                    height='100%'

                  /> */}
                  <CustomSplineArea
                    options = {chartOptions.options}
                    series = {chartOptions.series}
                  />

              </div>
            </div>
          </div>

          <div className="col-12">


              <div className="card treatment">
                <div className="card__header">
                  <h4>Historiques des traitements de la semaine</h4>
                    {/* <CustomChartsPie /> */}
                    {/* <CustomDonuts/> */}
                    {/* <SplineLine /> */}
                    

                    

                </div>
                <div className="card__body center-content">
                    
                    <div className="first-content-card">
                      <CustomChart 
                        series = {[25, 15]} 
                        labels = {["Effectués", "Non effectués"]}
                        title = { "" }
                        show = { true }
                        width = '100%'
                        
                      />
                    </div>
                    
                    <div className="sec-content-card">
                      <div className=" sec-content-card-text">
                        <p>Patients ayant  suivi<br />  un traitement</p> 
                        <div className="div">
                          <span>48</span>
                          <i className="bx bx-user"></i>
                        </div>
                      </div>
                      <div className=" sec-content-card-text">
                        <p>Patients en attente <br/> d'un traitement</p> 

                        <div className="">
                          <span>48</span>
                            <i className="bx bx-user"></i>
                          </div>

                        </div>
                    </div>

                </div>

                {/* <div className="card__footer">
                  
                </div> */}
            </div>

          </div>
        </div>

        <div className="col-4">
            <div className="row">
              {/* <div className="card">
                      <CustomChart 
                      series = {[25, 15, 44, 55, 41, 17]} 
                      labels = {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]}
                      />
              </div> */}

              <div className="card">
                <div className="card__header">
                  <h3>Les patients récents</h3>
                  <p>Dernière semaine</p>
                </div>
                <div className="card__body">
                  {/* table */}
                  <Table 
                    headData = {topCustomers.head}
                    renderHead={(item, index) => renderCustomerHead(item, index)}
                    bodyData = {topCustomers.body}
                    renderBody={(item,index) => renderCustomerBody(item, index)} 
                  />
                </div>
                <div className="card__footer">
                  {/* <Link to='/' >View all</Link> */}
                </div>
              </div>
            
            </div>

          </div>
    </div>

    {/* <div className="row">
      <CustomSplineArea />
    </div> */}

  </div>
  )
}

export default Traitements