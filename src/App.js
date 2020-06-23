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
  
  //move to ini redux, connect to app for data
  
  // const state = {
  //   additionalPrice: 0, // what to update
  //   car: {
  //     price: 26395,
  //     name: '2019 Ford Mustang',
  //     image:
  //       'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
  //     features: []
  //   },
  //   additionalFeatures: [
  //     { id: 1, name: 'V-6 engine', price: 1500 },
  //     { id: 2, name: 'Racing detail package', price: 1500 },
  //     { id: 3, name: 'Premium sound system', price: 500 },
  //     { id: 4, name: 'Rear spoiler', price: 250 }
  //   ]
  // };

  return (
    <div className="boxes">

      <div className="box">
        <Header car={props.car} />

        <AddedFeatures car={props.car}  />
        {/* removeFeature={props.removeFeature} */}
      </div>
      
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures}  />
        {/* addFeature={props.addFeature} */}
        
        <Total car={props.car} additionalPrice={props.additionalPrice} 
        />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log('map state to props in App', state);
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures
  }
}

export default connect( mapStateToProps, {})(App);
  // { addFeature, removeFeature }
  // )(App); 