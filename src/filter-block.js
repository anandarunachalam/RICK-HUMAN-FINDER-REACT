import React from 'react';

class FiltersView extends React.Component {
    render() {
        return <div className="">
        <h4 className="p-t-md">Filters</h4>
        <div className="border border-dark p-3">
           <h6>Species</h6>
           <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="humanFilter" onChange={() => this.props.filter(['species', 'human'])} />
              <label className="form-check-label" htmlFor="humanFilter">
              <small>Human</small>
              </label>
           </div>
           <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="alienFilter" onChange={() => this.props.filter(['species', 'alien'])} />
              <label className="form-check-label" htmlFor="alienFilter">
              <small>Alien</small>
              </label>
           </div>
           <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="otherFilter" onChange={() => this.props.filter(['species', 'other'])} />
              <label className="form-check-label" htmlFor="otherFilter">
              <small>Other Species ...</small>
              </label>
           </div>
        </div>
        <div className="border border-dark p-3 my-3">
           <h6>Gender</h6>
           <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="maleFilter" onChange={() => this.props.filter(['gender', 'male'])} />
              <label className="form-check-label" htmlFor="maleFilter">
              <small>Male</small>
              </label>
           </div>
           <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="femaleFilter" onChange={() => this.props.filter(['gender', 'female'])} />
              <label className="form-check-label" htmlFor="femaleFilter">
              <small>Female</small>
              </label>
           </div>
        </div>
        <div className="border border-dark p-3">
           <h6>Origin</h6>
           <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="unknownFilter" onChange={() => this.props.filter(['origin', 'unknown'])} />
              <label className="form-check-label" htmlFor="unknownFilter">
              <small>Unknown</small>
              </label>
           </div>
           <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="postFilter" onChange={() => this.props.filter(['origin', 'post-apocalyptic earth'])} />
              <label className="form-check-label" htmlFor="postFilter">
              <small>Post-Apocalyptic Earth</small>
              </label>
           </div>
           <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="nuptiaFilter" onChange={() => this.props.filter(['origin', 'nuptia 4'])} />
              <label className="form-check-label" htmlFor="nuptiaFilter">
              <small>Nuptia 4</small>
              </label>
           </div>
           <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="otherOriginFilter" onChange={() => this.props.filter(['origin', 'other'])} />
              <label className="form-check-label" htmlFor="otherOriginFilter">
              <small>Other Origins...</small>
              </label>
           </div>
        </div>
     </div>
    };
}

export default FiltersView;