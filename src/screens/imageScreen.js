import React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import ImageDetail from '../components/ImageDetail';


const ImageScreen = () => {

  return(
    <View>
    <ImageDetail title="forest" imageSource={require('../../assets/forest.jpg') }/>
    <ImageDetail title="Beach" imageSource={require('../../assets/beach.jpg')}/>
    <ImageDetail title="Mountain" imageSource={require('../../assets/mountain.jpg')}/>

    </View>
  );


}

export default ImageScreen;
