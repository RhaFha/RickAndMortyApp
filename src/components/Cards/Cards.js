import React from 'react'

const Cards = ({results}) => {

  let display;
  
  if(results){
    display = results.map(x => {
      let {id, name, image, location, status, species} = x; console.log(x);
      return (
        <div key={id} className="container-fluid card col-sm-12 col-lg-6 mb-3 g-0">
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
                      return (<span class="badge bg-danger">{status}</span>)
                    }else if(status === "Alive"){
                      return (<span class="badge bg-success">{status}</span>)
                    }else{
                      return (<span class="badge bg-secondary">{status}</span>)
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
          </div>
        </div>
      );
    });
  }else{
    display = "No se encontraron coincidencias.";
  }
  return <>{display}</>
}

export default Cards
