import React from 'react';
import {useState, useReducer} from 'react';
import ColorCounter from '../components/ColorCounter';
import { View, Text, StyleSheet } from 'react-native';


 const reducer = (state, action )=>  {
   ///State === { red: number, blue:number, green: number}
   ///action === { type: 'red' || ''green}
      switch(action.type){
          case 'change_red':
            return state.red + action.payload  > 255 || action.payload < 0 ? state : {...state, red: state.red + action.payload};

          case 'change_green':
              return state.green + action.payload  > 255 || action.payload < 0 ? state : {...state, green: state.green + action.payload};

          case 'change_blue':
              return state.blue + action.payload  > 255 || action.payload < 0 ? state : {...state, blue: state.blue + action.payload};

          default:
            return state; 

          
      }
 }



const SquareScreen = () => {

  
  const COLOR_INCREMENT = 15;
  const [state, dispatch] = useReducer(reducer, {red:0, green:0, blue:0});
  const  { red, green, blue} = state;






  return(
  <View>
 <ColorCounter 
    onIncrease = {()=> dispatch({type:'change_red', payload: COLOR_INCREMENT}) }
    onDecrease = {()=> dispatch({type:'change_red', payload: -1 * COLOR_INCREMENT})}
 color="red"/>
  <ColorCounter
     onIncrease = {()=> dispatch({type:'change_blue', payload: COLOR_INCREMENT}) }
    onDecrease = {()=> dispatch({type:'change_blue', payload: -1 * COLOR_INCREMENT})}
   color="blue"/>
   <ColorCounter
    onIncrease = {()=> dispatch({type:'change_green', payload: COLOR_INCREMENT}) }
    onDecrease = {()=> dispatch({type:'change_green', payload: -1 * COLOR_INCREMENT}) }
    color="green"/>
    

  <View style={{height: 150 , width: 150, backgroundColor: `rgb(${red},${blue},${green})`}}>

  </View>

  </View>);
};


export default SquareScreen;
