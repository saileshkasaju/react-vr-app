import React from 'react';
import {
  AppRegistry,
  // asset,
  Pano,
  View,
} from 'react-vr';

export default class react_vr_app extends React.Component {
  render() {
    return (
      <View>
        <Pano source={{ uri: '../static_assets/chess-world.jpg' }}/>        
      </View>
    );
  }
};

AppRegistry.registerComponent('react_vr_app', () => react_vr_app);
