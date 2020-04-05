import React from 'react';

class CardListComponent extends React.Component {
    render() {
        let cardData = this.props.list;
        return <div className="col-md-3 col-6">
        <div className="card bg-dark text-white">
           <img className="card-img-top" src={cardData.image}
              alt={cardData.name} />
           <div className="card-img-overlay card-overlay-head">             
                 <h4 className="text-white">{cardData.name}</h4>
                 <h6 className="text-secondary"><small>id: {cardData.id} - created 2 years ago</small></h6>
              </div>
           <div className="card-body small-fonts">
              <div className="row">
                 <h6 className="col-md-4 pr-0 text-secondary"><small>STATUS</small></h6>
                 <h6 className="col-md-8 float-right orange-text pl-0"><small>{cardData.status}</small></h6>
                 <hr className="col-md-9 text-secondary hr-border mt-0 mb-2" />
              </div>
              <div className="row">
                 <h6 className="col-md-4 pr-0 text-secondary"><small>SPECIES</small></h6>
                 <h6 className="col-md-8 float-right orange-text pl-0"><small>{cardData.species}</small></h6>
                 <hr className="col-md-9 text-secondary hr-border mt-0 mb-2" />
              </div>
              <div className="row">
                 <h6 className="col-md-4 pr-0 text-secondary"><small>GENDER</small></h6>
                 <h6 className="col-md-8 float-right orange-text pl-0"><small>{cardData.gender}</small></h6>
                 <hr className="col-md-9 text-secondary hr-border mt-0 mb-2" />
              </div>
              <div className="row">
                 <h6 className="col-md-4 pr-0 text-secondary"><small>ORIGIN</small></h6>
                 <h6 className="col-md-8 float-right orange-text pl-0"><small>{cardData.origin.name}</small>
                 </h6>
                 <hr className="col-md-9 text-secondary hr-border mt-0 mb-2" />
              </div>
              <div className="row">
                 <h6 className="col-md-4 pr-0 text-secondary"><small>LAST LOCATION</small></h6>
                 <h6 className="col-md-8 float-right orange-text pl-0"><small>{cardData.location.name}</small>
                 </h6>
              </div>
           </div>
        </div>
     </div>;
    }
}

export default CardListComponent;