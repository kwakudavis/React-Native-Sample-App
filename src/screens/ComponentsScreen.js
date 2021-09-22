import React from 'react';

import { Text, StyleSheet, View } from 'react-native';



const ComponentsScreen = () => {

const greetings = "Getting Started with React Native!";
const secondg = "My name is Davs";


return (
  <View>
  <Text style={styles.textStyle}>{greetings}</Text>
  <Text style={styles.text2Style}>{secondg}</Text>
  </View>
);

};


const styles = StyleSheet.create({

    textStyle:{
      fontSize: 45
    },

    text2Style:{
      fontSize:20
    }

});

export default ComponentsScreen;