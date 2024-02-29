import React from 'react';

function CardComponent() {
  return (
    <div class="card-container d-flex justify-content-center">
    
    <div className="card" style={{ width: '18rem', margin: '5px'}}>
        <div className="card-body" style={{}}>
          <h5 className="card-title" class="card-container d-flex justify-content-center" >Card One</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>

      <div className="card" style={{ width: '18rem', margin: '5px'}}>
        <div className="card-body" style={{}}>
          <h5 className="card-title" class="card-container d-flex justify-content-center" >Card Two</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>

      
      <div className="card" style={{ width: '18rem', margin: '5px'}}>
        <div className="card-body" style={{}}>
          <h5 className="card-title" class="card-container d-flex justify-content-center" >Card Three</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>

      </div>
  );
}

export default CardComponent;