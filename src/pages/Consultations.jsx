import React ,{ useState } from 'react'

import { Link } from 'react-router-dom/cjs/react-router-dom.min'

import Table from '../components/table/Table'

import Calendar from 'react-calendar'

import avatar01 from '../assets/images/avatar-1.jpg'

import avatar02 from '../assets/images/avatar-2.jpg'

import avatar03 from '../assets/images/avatar-3.jpg'

import avatar04 from '../assets/images/avatar-4.jpg'
import ConsultationCardTwo from '../components/consultation-card/ConsultationCardTwo'



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
  ]
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


const Consultation = () => {

  const [value, onChange] = useState(new Date());

  return (
    <div>

      <div className="row ">
        
        <div className="col-7 consultation-past">
          <div className="card ">

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
              <Link to='/' >View all</Link>
            </div>

          </div>
          
        </div>

        <div className="col-5">
          <div className="circle">
            
              <div className="small small1"></div>
              <div className="small small2"></div>
              <div className="small small3"></div>
          </div>
        </div>

      </div>

      <div className="row">
        <div className="col-12">

          <div className="card">
              <div className="card__header">
                Calendrier - CONSULTATION
              </div>
              <div className="card__body">
              <div className='row'>
                {/* <Calendar hover={new Date(2017, 0, 1)} onChange={onChange} value={value} /> */}
                <div className="col-3">
                  <ConsultationCardTwo />
                </div>
                <div className="col-3">
                  <ConsultationCardTwo />
                </div>
                <div className="col-3">
                  <ConsultationCardTwo />
                </div>
                <div className="col-3">
                  <ConsultationCardTwo />
                </div>
                
              </div>
              </div>
              <div className="card__footer"></div>

            </div>
            
        </div>
      </div>
  
    </div>
  )
}

export default Consultation