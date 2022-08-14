import React from 'react'
import AnalyseCard from '../../components/analyse-card/AnalyseCard'
import ContentInfo from '../../components/content-info/ContentInfo'
import Dropdown from '../../components/dropdown/Dropdown'
import MedicalInfo from '../../components/medical-info/MedicalInfo'
import patientInformation from '../../assets/JsonData/patients-info.json'
import Badge from '../../components/badge/Badge'
import consultationUpcomingCard from '../../assets/JsonData/consultation_coming.json'
import ConsultationCard from '../../components/consultation-card/ConsultationCard'
import { Link } from 'react-router-dom'

import Table from '../../components/table/Table'

import chat from '../../assets/icons/icons-64-white/chat.png'
import labo from '../../assets/icons/icons-64-white/laboratory.png'
import calendar from '../../assets/icons/icons-64-white/calendar.png'




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


const renderOrderHead = (item, index) => (
  <th key={index}>{item}</th>

)

const orderStatus = {
  "shipping": "primary",
  "pending": "warning",
  "paid": "success",
  "refund": "danger"
}

const renderOrderBody = (item, index) => (
  <tr key={index}>
    <td>{item.id}</td>  
    <td>{item.user}</td>  
    <td>{item.price}</td>  
    <td>{item.date}</td>
    <td>
      {/* <span>{item.status} </span> */}
      <Badge type={orderStatus[item.status]} content={item.status} />
    </td>
  </tr>
)



const renderCustomerHead = (item, index) => (
  <th key={index} >{item} </th>
)

const renderCustomerBody = (item,index) =>(
  <tr key={index} >
    <td>{item.username} </td>
    <td>{item.order} </td>
    <td><i class={item.price} ></i></td>
  </tr>
)

const latestOrders = {
  header: [
      "ID",
      "NOM",
      "TEL",
      "IMAGE"
  ],
  body: [
      {
          id: "01",
          user: "john doe",
          date: "17 Jun 2021",
          price: "98005478",
      },
      {
          id: "02",
          user: "frank iva",
          date: "1 Jun 2021",
          price: "98005478",
      },
      {
          id: "03",
          user: "anthony baker",
          date: "27 Jun 2021",
          price: "98005478",
      }
  ]
}


const titlePression = "Pression Sanguine"
const titleHeart = "Heart Rate"
const titleGlucose = "Glucose"
const titleCholesterol = "Cholesterol"

const blue="blue"
const violet="violet"
const vert="vert"

const Patients = () => {
  return (
    <div>

      <div className="card">
        {
          patientInformation.map( (item, index) =>(
            <div className="col" key={index} >
              <ContentInfo
              image={item.image}
              name={item.name}
              birth={item.birth}
              address={item.address}
              gendre={item.gendre}
              email={item.email}
              contact={item.contact}
              language={item.language}
              poids={item.poids}
              pression={item.pression}
              temperature={item.temperature}
              groupeSanguin={item.groupeSanguin}
              allergies={item.allergies}
              maladies={item.maladies}
            />

            <div className="row suite-patient-info">
              <div className="col-3">
                <MedicalInfo 
                  color={blue}
                  title={titlePression}
                  value={item.PressionSanguine}
                  level={item.pressionLevel}
                />
              </div>

              <div className="col-3">
                <MedicalInfo 
                  color={vert}
                  title={titleHeart}
                  value={item.HeartRate}
                  level={item.levelRate}
                />
              </div>

              <div className="col-3">
                <MedicalInfo 
                  color={violet}
                  title={titleGlucose}
                  value={item.glucose}
                  level={item.levelGlucose}
                />
              </div>

              <div className="col-3">
                <MedicalInfo 
                  title={titleCholesterol}
                  value={item.cholesterol}
                  level={item.levelCholesterol}
                />
              </div>
            </div>
          </div>

          
          ))
        }
        
      </div>



      <div className="">
        <div className="row ">
            <div className="col-8 ">
              <div className="card">
                <div className="consultation-past">

                  <div className="card__header">
                    <h3>Historique médicale+</h3>
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


              

            </div>

            <div className="col-4">
              <div className="card">
              
                <div className="card__header">
                  <h3>Liste des patients</h3>
                </div>

                <div className="card__body">
                  <Table
                    headData={latestOrders.header}
                    renderHead={(item, index) => renderOrderHead(item,index)}
                    bodyData={latestOrders.body}
                    renderBody={(item, index) => renderOrderBody(item,index)}  
                  />
                </div>

              </div>
            </div>
          </div>
      </div>

      <div className="col">
        <div className="card">
          <div className="card__header">
            <h3>Consultations prochaines</h3>
          </div>
          <div className="card__body">
            {/* <Table
              headData={latestOrders.header}
              renderHead={(item, index) => renderOrderHead(item,index)}
              bodyData={latestOrders.body}
              renderBody={(item, index) => renderOrderBody(item,index)}  
            /> */}
            <div className="row scroll-card">
              {
                consultationUpcomingCard.map((item, index) =>(
                  <div className="col-4" key={index}>
                    <ConsultationCard
                      image={item.image}
                      name={item.name}
                      email={item.email}
                      doctor={item.doctor}
                      location={item.location}
                      date={item.date}
                      time={item.time}

                    />
                  </div>
                ))
              }
            </div>


          </div>
          <div className="card__footer">
            <Link to ='/'>View all</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Patients