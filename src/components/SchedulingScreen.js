import React, { Component } from 'react';
import { Text, TextInput, View, Image, Picker, StyleSheet, TouchableOpacity } from 'react-native'
import CalendarStrip from 'react-native-calendar-strip';

class SchedulingScreen extends Component {

  state = {
    service: null,
    professional: null
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>O que vamos agendar hoje?</Text>

        <Text>Escolha o serviço</Text>
        <Picker
          selectedValue={this.state.professional}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ service: itemValue })
          }>
          <Picker.Item label="Massagem Simples" value="Massagem Simples" />
          <Picker.Item label="Unhas" value="Unhas" />
          <Picker.Item label="Unhas e Pés" value="Unhas e Pés" />
        </Picker>

        <Text>Escolha o(a) profissional</Text>
        <Picker
          selectedValue={this.state.professional}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ professional: itemValue })
          }>
          <Picker.Item label="Nicole" value="Nicole" />
          <Picker.Item label="Fernanca" value="Fernanda" />
        </Picker>

        <Text>Data e Hora</Text>
        <CalendarStrip
          style={{ height: 150, paddingTop: 20, paddingBottom: 10 }}
        />
        

      </View>
    );
  }
}

export default SchedulingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});