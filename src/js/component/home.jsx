import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import bolsas from "../../img/bolsas_mascotas.jpg";
import croquetas from "../../img/croquetas.jpg";
import platos from "../../img/platos.jpg";
import colchon from "../../img/colchon.jpg";

//create your first component
export const Home = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div className="container-fluid">
    
        <a className="navbar-brand" href="#">
          Start Bootstrap
        </a>
      
       
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
            <a className="nav-link" href="#">
              About
            </a>
            <a className="nav-link" href="#">
              Services
            </a>
            <a className="nav-link" href="#">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export const Jubottron = () => {
	return (
	  <>
		<div className="container py-4">
		  
		  <div className="p-5 mb-4 bg-light rounded-3">
			<div className="container-fluid py-5">
			  <h1 className="display-5 fw-bold">Bienvenido a Vet</h1>
			  <p className="col-md-8 fs-4">
				Tu veterinaria de confianza, contamos con todos los servicios y productos
				 para tus mascotas lo que buscas esta aqui 😊
			  </p>
			  <button className="btn btn-primary btn-lg" type="button">
				Productos
			  </button>
			</div>
		  </div>
		</div>
	  </>
	);
  };

  export const Card = () => {
	return (
	<>
	 <div className="d-flex flex-wrap justify-content-center">
      {/* Primera tarjeta */}
      <div className="card m-2" style={{ width: "18rem" }}>
        <img src={bolsas} className="card-img-top" alt="Example 1" />
        <div className="card-body">
          <h5 className="card-title">Card 1</h5>
          <p className="card-text">
            This is an example of a horizontal card. Add some text to describe the content.
          </p>
          <a href="#" className="btn btn-primary">
            Comprar
          </a>
        </div>
      </div>

      {/* Segunda tarjeta */}
      <div className="card m-2" style={{ width: "18rem" }}>
        <img src={croquetas} className="card-img-top" alt="Example 2" />
        <div className="card-body">
          <h5 className="card-title">Card 2</h5>
          <p className="card-text">
            Another example card aligned horizontally using Bootstrap's flex utilities.
          </p>
          <a href="#" className="btn btn-primary">
          Comprar
          </a>
        </div>
      </div>

      {/* cuarta tarjeta */}
      <div className="card m-2" style={{ width: "18rem" }}>
        <img src={platos} className="card-img-top" alt="Example 3" />
        <div className="card-body">
          <h5 className="card-title">Card 3</h5>
          <p className="card-text">
            This layout is responsive and works well for horizontal card displays.
          </p>
          <a href="#" className="btn btn-primary">
          Comprar
          </a>
        </div>
      </div>
      {/* Tercera tarjeta */}
      <div className="card m-2" style={{ width: "18rem" }}>
        <img src={colchon} className="card-img-top" alt="Example 3" />
        <div className="card-body">
          <h5 className="card-title">Card 3</h5>
          <p className="card-text">
            This layout is responsive and works well for horizontal card displays.
          </p>
          <a href="#" className="btn btn-primary">
          Comprar
          </a>
        </div>
      </div>
    </div>
	</>
	);
  };

  export const Footer = () =>{

      return(
      <> 
        <footer className="mt-auto text-white-50  text-center py-3" 
         style={{ backgroundColor: "black", padding: "10px", color: "white"  }}>
          <p>copyright 2025.</p>
        
        </footer>
      </>  
      )
  }