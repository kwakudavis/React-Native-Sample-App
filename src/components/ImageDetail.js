import React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity, Image} from 'react-native';

const ImageDetail = (props) => {

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  stretch: {
    width: 300,
    height: 300,
    resizeMode: 'stretch',
  },
});


  return(
    <View>
    <Text>
    We are showing you the image of a {props.title}.
    </Text>
    <Image  style={styles.stretch} source = {props.imageSource}
    />
    </View>
  );


}

export default ImageDetail;
