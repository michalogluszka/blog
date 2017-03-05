import React from 'react';

import { withGoogleMap, GoogleMap } from 'react-google-maps';
import withScriptjs from 'react-google-maps/lib/async/withScriptjs';

const App = withScriptjs(withGoogleMap(() => (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: 51.111658, lng: 17.027864 }}
    />
  )));
export default App;