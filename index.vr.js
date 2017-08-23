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
         source={[
           asset('right.png'),
           asset('left.png'),
           asset('up.png'),
           asset('down.png'),
           asset('back.jpg'),
           asset('front.jpg'),
         ]}
        />        
      </View>
    );
  }
};

AppRegistry.registerComponent('react_vr_app', () => react_vr_app);
