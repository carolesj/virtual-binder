import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {

  render() {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    );
   
  };

 }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
