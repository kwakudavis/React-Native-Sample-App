import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';


const ListScreen = () => {

  const friends = [
      {name: 'friend #1', age: 20},
      {name: 'friend #2', age: 20},
      {name: 'friend #3', age: 20},
      {name: 'friend #4', age: 20},
      {name: 'friend #5', age: 20},
      {name: 'friend #6', age: 20},
      {name: 'friend #7', age: 20},
      {name: 'friend #8', age: 20},
      {name: 'friend #9', age: 20},
      {name: 'friend #10', age: 20}
  ];

  return (
    <FlatList 
   
    keyExtractor = {(firends) => friends.name}
    data = {friends} 
    renderItem = {({item}) => {

        return <Text style= {styles.textStyle}> {item.name} - {item.age}</Text>;

    }}
    />
     );
     
};

const styles = StyleSheet.create({

      textStyle: {
        marginVertical :5,
        borderStyle: "solid"
      }
});

export default ListScreen;