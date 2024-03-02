import React from 'react';


function CardComponent() {
  return (
    <div class="card-container d-flex justify-content-center">
      <div className="card" style={{ width: '18rem', margin: '5px', backgroundColor:'blue'}}>
        <div className="card-body" style={{}}>
          <h5 className="card-title" class="card-container d-flex justify-content-center" style={{color:'white'}}>Card One</h5>
          <p className="card-text" style={{color:'white'}}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>

      <div className="card" style={{ width: '18rem', margin: '5px', backgroundColor:'red'}}>
        <div className="card-body" style={{}}>
          <h5 className="card-title" class="card-container d-flex justify-content-center" style={{color:'white'}}>Card Two</h5>
          <p className="card-text" style={{color:'white'}}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>

      
      <div className="card" style={{ width: '18rem', margin: '5px', backgroundColor:'green'}}>
        <div className="card-body" style={{}}>
          <h5 className="card-title" class="card-container d-flex justify-content-center" style={{color:'white'}}>Card Three</h5>
          <p className="card-text" style={{color:'white'}}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>

      </div>
  );
}

export default CardComponent;