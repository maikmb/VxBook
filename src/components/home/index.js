import React, { Component } from 'react';
import { Text, TextInput, View, Image, StyleSheet, TouchableOpacity } from 'react-native'

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center", 
    justifyContent: "center"
  }
});