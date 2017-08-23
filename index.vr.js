import React from 'react';
import {
  AppRegistry,
  Pano,
  asset,
  View,
} from 'react-vr';

export default class react_vr_app extends React.Component {
  render() {
    return (
      <View>
        <Pano
         source={asset('photo.jpg')}
         style={{
           transform: [{
             rotateY: -20
           }]
         }}
         onLoad={() => {
          console.log('Loaded');
         }}
         />        
      </View>
    );
  }
};

AppRegistry.registerComponent('react_vr_app', () => react_vr_app);
