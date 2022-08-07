import React from 'react'
import ajout_patient from "../../assets/img_personnel/14.png";



const Ajout = ()=>{
    return(
        <>
            <div className="section ajout">
                <div className="container">
                    <div className="title"><h4>Ajout de patient</h4></div>
                    <div className=" row information">
                        <div className="col-md-4 col-sm-12  img">
                            <img src={ajout_patient} alt="" srcset="" />
                        </div>
                        <div className="col-sm-12 col-md-8 form">
                            <form>
                                <div class="row ">
                                    <div class="col-sm-12 col-md-6 input-control">
                                        <input type="text" class="" placeholder="Nom" />
                                    </div>
                                    <div class="col-sm-12 col-md-6 input-control">
                                        <input type="text" class="" placeholder="Prenom" />
                                    </div>
                                </div>

                                <div class="row ">
                                    <div class="col-sm-12 col-md-6 input-control">
                                        <input type="text" class="" placeholder="Age" />
                                    </div>
                                    <div class="col-sm-12 col-md-6 input-control">
                                        <input type="text" class="" placeholder="Sexe" />
                                    </div>
                                </div>

                                <div class="row ">
                                    <div class="col-sm-12 col-md-6 input-control">
                                        <input type="text" class="" placeholder="Contact" />
                                    </div>
                                    <div class="col-sm-12 col-md-6 input-control">
                                        <input type="text" class="" placeholder="Taille" />
                                    </div>
                                </div>
                                <div class="row ">
                                    <div class="col-sm-12 col-md-6 input-control">
                                        <input type="text" class="" placeholder="Tension" />
                                    </div>
                                    <div class="col-sm-12 col-md-6 input-control">
                                        <input type="text" class="" placeholder="Température" />
                                    </div>
                                </div>

                                <div class="row ">
                                    <div class="col-sm-12 col-md-6 input-control"></div>
                                    <div class="col-sm-12 col-md-6 input-control submit">
                                        <button type="submit">Valider</button>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Ajout