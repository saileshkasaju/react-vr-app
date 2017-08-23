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
        lit
        style={{
          color: 'yellow',
          transform: [
            { translate: [-1.15, 0, -4] }
          ]
        }}
        widthSegments={20}
        heightSegments={20}
        />
        <Box
        lit
        style={{
          color: 'blue',
          transform: [
            { translate: [0, 0, -6] }
          ]
        }}
        />
        <Cylinder
        lit
        style={{
          color: 'red',
          transform: [
            { translate: [1.5, 0, -4] }
          ]
        }}
        radiusTop={0}
        segments={20}
        />
        <Plane
        lit
        style={{
          color: 'green',
          transform: [
            { translate: [0, -0.5, -5] },
            { rotateX: -90 }
          ]
        }}
        dimWidth={4}
        dimHeight={4}
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
