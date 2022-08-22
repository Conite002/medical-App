import React, { useState} from 'react'
import ajout_patient from "../../assets/img_personnel/14.png";
import { writeUserData } from "../../firebase"



const Ajout = ()=>{
    // writeUserData();
    const [nom, setNom] = useState(null);
    const [prenom, setPrenom] = useState(null);
    const [age, setAge] = useState(null);
    const [sexe, setSexe] = useState(null);
    const [contact, setContact] = useState(null);
    const [taille, setTaille] = useState(null);
    const [tension, setTension ] = useState(null);
    const [temperature,setTemperature ] = useState(null);

    function addPatients(e){

        let div = document.querySelector(".fill_input");
        if(nom != null && prenom != null && age != null && sexe != null && taille != null && tension != null && temperature != null && contact != null){
            e.preventDefault();
            div.textContent = "";
            var button = document.querySelector(".valid");
            var spanButton = document.querySelector('.check-submit');
            spanButton.style.transform = ("scale(1)");
            // writeUserData(nom, prenom, age, sexe, contact, taille, tension,temperature);
            let inputData = document.querySelectorAll(".datapatients");
                inputData.forEach((ip) => {
                    ip.value = "";
                })
            spanButton.style.transform = ("scale(1)");
            setTimeout(
                function(){
                    spanButton.style.transform = ("scale(0)");
                }, 5000
            );
            cleanInput()
        }
        else{
            div.textContent = "Certains champs sont vides";
        }
    }   

    function cleanInput(){
        setNom("");
        setPrenom("");
        setAge("");
        setSexe("");
        setTaille("");
        setContact("");
        setTension("");
        setTemperature("");
    }

    return(
        <>
            <div className="section ajout">
                <div className="container">
                    <div className="title"><h4>Ajout de patient</h4></div>
                    <form>
                        <div className=" row information">
                            <div className="col-md-4 col-sm-12  img">
                                <img src={ajout_patient} alt="" />
                            </div>
                            <div className="col-sm-12 col-md-8 form">
                                <div className="row ">
                                    <div className="col-sm-12 col-md-6 input-control">
                                        <input type="text" className="datapatients" onChange={(e)=>{setNom(e.target.value)}} name="nom" placeholder="Nom" required/>
                                    </div>
                                    <div className="col-sm-12 col-md-6 input-control">
                                        <input type="text" className="datapatients" onChange={(e)=>{setPrenom(e.target.value)}} name="prenom" placeholder="Prenom" required/>
                                    </div>
                                </div>

                                <div className="row ">
                                    <div className="col-sm-12 col-md-6 input-control">
                                        <input type="text" className="datapatients" onChange={(e)=>{setAge(e.target.value)}} name="age" placeholder="Age" required/>
                                    </div>
                                    <div className="col-sm-12 col-md-6 input-control">
                                        <input type="text" className="datapatients" onChange={(e)=>{setSexe(e.target.value)}} name="sexe" placeholder="Sexe" required/>
                                    </div>
                                </div>

                                <div className="row ">
                                    <div className="col-sm-12 col-md-6 input-control">
                                        <input type="text" className="datapatients" onChange={(e)=>{setContact(e.target.value)}} name="contact" placeholder="Contact" required/>
                                    </div>
                                    <div className="col-sm-12 col-md-6 input-control">
                                        <input type="text" className="datapatients" onChange={(e)=>{setTaille(e.target.value)}} name="taille" placeholder="Taille" required/>
                                    </div>
                                </div>
                                <div className="row ">
                                    <div className="col-sm-12 col-md-6 input-control">
                                        <input type="text" className="datapatients" onChange={(e)=>{setTension(e.target.value)}} name="tension" placeholder="Tension" required/>
                                    </div>
                                    <div className="col-sm-12 col-md-6 input-control">
                                        <input type="text" className="datapatients" onChange={(e)=>{setTemperature(e.target.value)}} name="temperature" placeholder="Température" required/>
                                    </div>
                                </div>

                                <div className="row fill_input"></div>
                                <div className="row ">
                                    <div className="col-sm-12 col-md-6 input-control"></div>
                                    <div className="col-sm-12 col-md-6 input-control submit">
                                        <span className="check-submit">Succès</span> <button type="submit" className="valid"  onClick={(e)=>{addPatients(e)}} >Valider</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}


export default Ajout