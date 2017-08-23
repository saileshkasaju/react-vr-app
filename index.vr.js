import React from 'react';
import {
  AppRegistry,
  Pano,
  asset,
  View,
  Text
} from 'react-vr';

export default class react_vr_app extends React.Component {
  render() {
    return (
      <View>
        <Pano
         source={
           asset('chess-world.jpg')
         }
        />
        <Text
        style={{
          transform: [{
            translateZ: -1
          }],
          color: 'lightblue',
          backgroundColor: '#335',
          fontSize: 0.1,
          fontWeight: 300,
          width: 0.45,
          height: 0.45,
          textAlign: 'center',
          textAlignVertical: 'center',
          layoutOrigin: [0.5, 0.5]
        }}
        >
          Hello VR
        </Text>
      </View>
    );
  }
};

AppRegistry.registerComponent('react_vr_app', () => react_vr_app);
