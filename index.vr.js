import React from 'react';
import {
  AppRegistry,
  Pano,
  asset,
  View,
  Text,
  Image,
  PointLight,
  Sphere,
  Box,
  Cylinder,
  Plane
} from 'react-vr';

export default class react_vr_app extends React.Component {
  render() {
    return (
      <View>
        <Sphere
        style={{
          color: 'lightblue',
          transform: [{ translateZ: -2 }]
        }}
        lit
        texture={asset('earth.jpg')}
        heightSegments={20}
        widthSegments={20}
        radius={0.6}
        />
        <PointLight
          intensity={1}
          style={{
            transform: [{ translate: [0, 700, 700] }]
          }}
        />
      </View>
    );
  }
};

AppRegistry.registerComponent('react_vr_app', () => react_vr_app);
