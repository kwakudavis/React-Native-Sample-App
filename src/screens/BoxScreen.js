import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

 const BoxScreen = () => {

    return (
      <View style={styles.viewStyle}>
      <Text style={styles.textStyle1}> Box 1 </Text>
         <Text style={styles.textStyle2}> Box 2 </Text>
            <Text style={styles.textStyle3}> Box 3 </Text>
      </View>

    );
 };

const styles = StyleSheet.create({
   viewStyle:{
     borderWidth: 3,
     borderColor: 'black',
    alignItems: 'center', //center, stretch and flex-start is also possible
    flexDirection: 'column',///Controls whether children are lined up horizontally or vertically row == horizontal, column == default(vertical)
  //  justifyContent:'space-around', //space-round == space around items, space-between, center, flex-start, flex- end
    height:200
    ///absolute fill
    //position:'absolute'
    //top:0
    //bottom:0
    //right:0
    //left:0
    ///...StyleSheet.absoluteFillObject another form of writinh absolute fill
     
  },




  textStyle1 : {

    borderWidth: 3,
     borderColor: 'red',
        // flex: 3 /// This causes textStyle2 component to take up as much space as possible
    
   
    
    
  },
  textStyle2 : {

    borderWidth: 3,
     borderColor: 'red',
      // flex: 3 /// This causes textStyle2 component to take up as much space as possible
      alignSelf:'end'
    
    
  },

  textStyle3 : {

    borderWidth: 3,
     borderColor: 'red',
     //    flex: 7 /// This causes textStyle2 component to take up as much space as possible
    
    
  }
}
);

 export default BoxScreen;
