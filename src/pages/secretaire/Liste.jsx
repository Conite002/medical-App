import React from "react";

const Liste = ()=>{
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
                                    <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>15</td>
                                    <td>F</td>
                                    <td>+22966334466</td>
                                    <td>77</td>
                                    <td>16</td>
                                    <td>22</td>
                                    <td><span><i class="fa-solid fa-pen-to-square"></i><i class="fa-solid fa-trash"></i></span></td>
                                    </tr>
                                    <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>15</td>
                                    <td>F</td>
                                    <td>+22966334466</td>
                                    <td>77</td>
                                    <td>16</td>
                                    <td>22</td>
                                    <td><span><i class="fa-solid fa-pen-to-square"></i><i class="fa-solid fa-trash"></i></span></td>
                                    </tr>
                                    <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>15</td>
                                    <td>F</td>
                                    <td>+22966334466</td>
                                    <td>77</td>
                                    <td>16</td>
                                    <td>22</td>
                                    <td><span><i class="fa-solid fa-pen-to-square"></i><i class="fa-solid fa-trash"></i></span></td>
                                    </tr>
                                    
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