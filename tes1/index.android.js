/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class tes1 extends Component {

  constructor(props){ // chay trc render

    super(props);
    
  }


  componentWillMount(){
  // man hinh trc render


    }


  render() {
    return (

      <View style={styles.container}>
        <Text style={styles.welcome}>
          
          HELLO WORLD:d
          
        </Text>
    
      </View>
    );
  }
  componentDidMount(){
  // sau render

  }







}



const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: 'red',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('tes1', () => tes1);
