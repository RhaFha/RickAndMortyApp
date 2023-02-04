import React from 'react'
import { Link } from "react-router-dom";
import CardDetails from "./CardDetails";

const Cards = ({page,results}) => {

  let display;
  
  if(results){
    display = results.map(x => {
      let {id, name, image, location, status, species} = x;
      return (
        
        
        <div key={id} className="card col-sm-12 col-lg-6 mb-3 g-0">
          <Link
          style={{ textDecoration: "none" }}
          to={`${page}${id}`}
          key={id}
          className="text-dark"
        >
          <div className="row g-0">
            <div className="col-md-4">
              <img src={image} className="img-fluid rounded-1" alt="..."/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <div className="content">
                  <div className="fs-5 hw-bold">{name}</div>
                  <div className="fs-6 fw-light">
                    <small className="text-muted">
                    {(() => {
                    if(status === "Dead"){
                      return (<span className="badge bg-danger">{status}</span>)
                    }else if(status === "Alive"){
                      return (<span className="badge bg-success">{status}</span>)
                    }else{
                      return (<span className="badge bg-secondary">{status}</span>)
                    }
                    })()}
                       &nbsp; {species}
                    </small>
                  </div>
                  <div className="">
                    <div className="fs-6"><small className="text-muted">Last location:</small></div>
                    <div className="fs-6">{location.name}</div>
                    <div className="fs-6"><small className="text-muted">First seen in:</small></div>
                    <div className="fs-6">{location.name}</div>
                  </div>
                </div>
              </div>
            </div>
          </div></Link>
        </div>
      );
    });
  }else{
    display = "No se encontraron coincidencias.";
  }
  return <>{display}</>
}

export default Cards
