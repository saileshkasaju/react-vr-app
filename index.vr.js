import React from 'react';
import {
  AppRegistry,
  Pano,
  asset,
  View,
  Text,
  Image
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
        <View
         style={{
           width: 2,
           height: 2.4,
           backgroundColor: 'white',
           layoutOrigin: [0.5, 0.5],
           transform: [{ translate: [0, 0, -3] }],
           justifyContent: 'space-between'
         }}
        >
         <Image
          source={
           asset('left.png')
         }
         style={{
           height: 1.2
         }}
        />
        <Text 
         style={{
           color: '#333',
           fontSize: 0.16,
           textAlign: 'center'
         }}
        >
          Explore yourself
        </Text>
        <View
        style={{
          flexDirection: 'row'
        }}
        >
         <Image
          source={
           asset('down.png')
         }
         style={{
           width: 0.5,
           height: 0.5
         }}
        />
        <Image
          source={
           asset('up.png')
         }
         style={{
           width: 0.5,
           height: 0.5
         }}
        />
        <Image
          source={
           asset('back.jpg')
         }
         style={{
           width: 0.5,
           height: 0.5
         }}
        />
        <Image
          source={
           asset('scene.png')
         }
         style={{
           width: 0.5,
           height: 0.5
         }}
        />
        </View>
        </View>
      </View>
    );
  }
};

AppRegistry.registerComponent('react_vr_app', () => react_vr_app);
