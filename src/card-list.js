import React from 'react';

class CardComponent extends React.Component {
    render() {
        let cardData = this.props.list;
        return <div className="col-md-3 col-6 p p-r-none">
        <div className="card bg-dark text-white">
           <img className="card-img-top" src={cardData.image} alt={cardData.name} />
           <div className="card-img-overlay card-overlay-head">             
                 <h4 className="text-white">{cardData.name}</h4>
                 <h6 className="text-secondary"><small>id: {cardData.id} - created 2 years ago</small></h6>
              </div>
           <div className="card-body small-fonts">
              <div className="row">
                 <span className="col-md-6 text-xs">STATUS</span>
                 <span className="col-md-6 text-xs text-right color-orange">{cardData.status}</span>
                 <hr className="col-md-9 text-secondary hr-border" />
              </div>
              <div className="row">
              <span className="col-md-6 text-xs">SPECIES</span>              
              <span className="col-md-6 text-xs text-right color-orange">{cardData.species}</span>
              <hr className="col-md-9 text-secondary hr-border" />
              </div>
              <div className="row">
              <span className="col-md-6 text-xs">GENDER</span>
              <span className="col-md-6 text-xs text-right color-orange">{cardData.gender}</span>
                 <hr className="col-md-9 text-secondary hr-border mt-0 mb-2" />
              </div>
              <div className="row">
              <span className="col-md-4 text-xs">ORIGIN</span>
              <span className="col-md-8 text-xs text-right color-orange">{cardData.origin.name}</span>
                 
                 <hr className="col-md-9 text-secondary hr-border mt-0 mb-2" />
              </div>
              <div className="row">
              <span className="col-md-5 text-xs p-r-none">LAST LOCATION</span>
                 <span className="col-md-7 text-xs text-right color-orange">{cardData.location.name}</span>
              </div>
           </div>
        </div>
     </div>;
    }
}

export default CardComponent;