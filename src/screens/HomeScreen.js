import React from "react";
import { Text, StyleSheet, View, Button , TouchableOpacity} from "react-native";

const HomeScreen = (props) => {


  return (  <View>
  <Text style={styles.text}>HomeScreen is beautiful </Text>
  <Button onPress={()=>{props.navigation.navigate("Components")}} title="Go To Components Demo"/>
  <Button onPress={()=>{props.navigation.navigate("Images")}} title="Go To Images Component"/>
  <Button onPress={()=>{props.navigation.navigate("Counter")}} title="Go To Counter Component"/>
  <Button onPress={()=>{props.navigation.navigate("Color")}} title="Go To Color Component"/>
   <Button onPress={()=>{props.navigation.navigate("Square")}} title="Go To Square Component"/>
      <Button onPress={()=>{props.navigation.navigate("Text")}} title="Go To Text Component"/>
       <Button onPress={()=>{props.navigation.navigate("Box")}} title="Box Demo"/>
  <TouchableOpacity onPress={()=>{props.navigation.navigate("Lists")}}>
    <Text>
    Go to List
    </Text>
  </TouchableOpacity>
  </View>); 

};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
