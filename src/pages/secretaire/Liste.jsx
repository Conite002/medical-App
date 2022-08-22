import React,{useState} from "react";
import { getData } from "../../firebase"
import {get, child} from "firebase/database"

const allData = getData();
var  dataRef = [] ;
const renderAllItems = ()=>{
    get(child(allData, "patients")).then((snapshot) => {
        if(snapshot.exists()) {
          Object.entries(snapshot.val()).map((item) => ( 
            dataRef.push({
                "id" : item[0],
                "nom": item[1].patient_nom,
                "prenom" : item[1].patient_prenom,
                "age" : item[1].patient_age,
                "sexe": item[1].patient_sexe,
                "contact" : item[1].patient_contact,
                "tension" : item[1].patient_tension,
                "taille" : item[1].patient_taille,
                "temperature" : item[1].patient_temperature
            })
         ))
        }else{
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
    });
}
// const tableItem = props =>{
//     console.log(props)
//   return(
//     <tr>
//     <th scope="col">{props["id"]}</th>
//     <td> {props["nom"]} </td>
//     <td> {props["prenom"]} </td>
//     <td> {props["age"]} </td>
//     <td> {props["sexe"]} </td>
//     <td> {props["taille"]} </td>
//     <td> {props["contact"]} </td>
//     <td> {props["tension"]} </td>
//     <td> {props["temperature"]} </td>
//     </tr>
//   )
// }

const Liste = ()=>{
    renderAllItems();
    console.log(dataRef);
    dataRef.forEach((item) => (
        console.log(item)
    ))


    return(
        <>
            <div className="section liste">
                <div className="container">
                    <div className="title">
                        <h4>Liste des patients</h4>
                    </div>
                    <div className="row table-list">
                        <div class="table-responsive-sm">
                            <table class="table">
                                <caption>List of users</caption>
                                <thead>
                                    <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Nom</th>
                                    <th scope="col">prenom</th>
                                    <th scope="col">Age</th>
                                    <th scope="col">sexe</th>
                                    <th scope="col">contact</th>
                                    <th scope="col">poids</th>
                                    <th scope="col">tension</th>
                                    <th scope="col">temperature</th>
                                    <th scope="col">Edition</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                    {(()=>(
                                        dataRef.map((props) => {
                                        return (<tr>
                                        <th scope="col">{props.length}</th>
                                        <td> {props.nom} </td>
                                        <td> {props.prenom} </td>
                                        <td> {props.age} </td>
                                        <td> {props.sexe} </td>
                                        <td> {props.taille} </td>
                                        <td> {props.contact} </td>
                                        <td> {props.tension} </td>
                                        <td> {props.temperature} </td>
                                        <td><span><i class="fa-solid fa-pen-to-square"></i><i class="fa-solid fa-trash"></i></span></td>
                                        </tr>)
                                        })
                                        ))()
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Liste