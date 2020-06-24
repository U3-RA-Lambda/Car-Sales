import React from 'react';
import { connect } from "react-redux";
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { addFeature } from './actions/addFeature'
import { removeFeature } from './actions/removeFeature';

const App = (props) => {

  console.log('Props from App', props);
  

  return (
    <div className="boxes">

      <div className="box">
        <Header car={props.car} />

        <AddedFeatures car={props.car} removeFeature={props.removeFeature} />
        {/* removeFeature={props.removeFeature} */}
      </div>
      
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} addFeature={props.addFeature} />
        {/* addFeature={props.addFeature} */}
        
        <Total car={props.car} additionalPrice={props.additionalPrice} 
        />
      </div>
    </div>
  );
};

//accessing props anywhere to avoid having it passed props in App. Don't connect App or highest level component, can be in multiple components. Never put store in a place outside of the provider.

const mapStateToProps = state => {
  console.log('map state to props in App', state);
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures
  }
}

export default connect(mapStateToProps, 
  { addFeature, removeFeature })(App); 

  //state.find based on ID to find car that is selected, a route with /id, or a box at top hooking to state, for state.selected (in the event of multiple)