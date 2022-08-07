import React from 'react';
import accueil from "../../assets/img_personnel/2.png";
import action from "../../assets/img_personnel/5.png";
import "./secretaire.css"


const Accueil = ()=>{
	return(
		<>
			{/* <div>Accueil Secretaire</div> */}
			<div className = "section welcome">
				<div className="container">
					<div className="row">
						<div className="espace col-md-7">
							<div className="espace-secretaire"><h5>Espace secretaire</h5></div>
							<div className="content-text">
								<p>Bienvenue MR</p>
								<p className='titlesec'>Renauld DESALLES</p>
								<p className='welcome-sentence'>Lorem ipsum dolor, sit amet consectetur.Laboriosam 
								suscipit veritatis cum deleniti consectetur impedit quo veniam assumenda repellendus
								 dolores! Perferendis, et aliquid hic similique nam ipsa facere error distinctio dolore
								  aut molestiae laboriosam modi beatae, quas amet.</p>
							</div>
						</div>
						<div className="col-md-5">
							<div className="content-img">
								<img src={accueil} />
							</div>
						</div>
					</div>
					
				</div>
			</div>

			<div className = "section action">
				<div className="container">
					<div className="row">
						<div className="col-md-5">
							<div className="content-img">
								<img src={action} />
							</div>
						</div>
						<div className=" col-md-7 content-card">
						<div className="bigtitle"><h6>Action</h6></div>
							<div className="row">
								<div className="content-card-block">
									<div className="title"><span><i className="bx bxs-user-account"></i></span><h3>Enregistrement</h3></div>
									<div className="text"><p>123 patients</p></div>
								</div>
								<div className="content-card-block">
									<div className="title"><span><i className="bx bxs-user-account"></i></span><h3>Liste patients</h3></div>
									<div className="text"><p>423 nouveaux</p></div>
								</div>
							</div>
							<div className="row">
								<div className="content-card-block">
									<div className="title"><span><i className="bx bxs-user-account"></i></span><h3>COnsultation</h3></div>
									<div className="text"><p>43 patients</p></div>
								</div>
								<div className="content-card-block">
									<div className="title"><span><i className="bx bxs-user-account"></i></span><h3>Programmes</h3></div>
									<div className="text"><p>34 en cours</p></div>
								</div>
							</div>
						</div>
						
					</div>
					
				</div>
			</div>
		</>
	);
}

export default Accueil