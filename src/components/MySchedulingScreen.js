import React, { Component } from 'react';
import { Text, TextInput, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import SwitchSelector from "react-native-switch-selector";

class MySchedulingScreen extends Component {
  state = {
    selectedFilter: null
  };

  render() {
    return (
      <View style={styles.container}>
        <SwitchSelector
          initial={0}
          onPress={value => this.setState({ selectedFilter: value })}
          textColor={'#666666'}
          selectedColor={'#ffffff'}
          buttonColor={'#ffa993'}
          borderColor={'#ffa993'}
          hasPadding
          options={[
            { label: "Agendados", value: "Agendados" },
            { label: "Realizados", value: "Realizados"},
            { label: "Cancelados", value: "Cancelados" } 
          ]}
        />
      </View>
    );
  }
}

export default MySchedulingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});