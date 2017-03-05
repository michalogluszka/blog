import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App 
    googleMapURL={'https://maps.googleapis.com/maps/api/js'} 
    loadingElement={<div>Loading</div>}
    containerElement={<div style={{ height: '100%' }} />}
    mapElement={<div style={{ height: '100%' }} />}
   />,
  document.getElementById('root')
);
