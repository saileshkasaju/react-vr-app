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
        <Cylinder
        wireframe
        segments={4}
        dimHeight={0.5}
        radiusBottom={0.35}
        radiusTop={0}
        style={{
          transform: [{ translateZ: -2 }]
        }}
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
