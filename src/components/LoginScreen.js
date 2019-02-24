import React, { Component } from 'react';
import { Text, TextInput, View, Image, StyleSheet, TouchableOpacity } from 'react-native'

import logoVortx from '../../assets/images/logo-horiz-colorido.png'

class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.topSection}>
          <Image style={{ marginBottom: 24 }} source={logoVortx} />
          <Text style={styles.title}>Entre com seu CPF e senha do Portal Vórtx</Text>
          <Text style={styles.subTitle}>Tenha acesso ao agendamento de unhas e massagem!</Text>
          <Text style={styles.subTitle}>Assim ficou mais fácil, né?</Text>
        </View>

        <View style={styles.bottomSection}>

          <TextInput style={styles.input} placeholder={'Seu CPF'} keyboardType="number-pad" maxLength={11} />
          <TextInput style={styles.input} placeholder={'Sua senha númerica'} secureTextEntry={true} />
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Main')} >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

        </View>

      </View>
    );
  }

  login = () => {    
    this.props.navigation.navigate('Main');
  }

}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  topSection: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 40,
    paddingRight: 40
  },
  bottomSection: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    justifyContent: 'center',
    paddingLeft: 40,
    paddingRight: 40
  },
  title: {
    fontSize: 19,
    fontWeight: "500",
    color: '#333333',
    marginBottom: 24,
    width: 250
  },
  subTitle: {
    fontSize: 14,
    color: '#666666',
    width: 200
  },
  input: {
    borderBottomColor: '#d4d4d4',
    borderBottomWidth: 1,
    marginBottom: 30,
    fontSize: 14,
    letterSpacing: 0.8,
    color: '#666666',
  },
  button: {
    width: 150,
    backgroundColor: '#fe979c',
    borderRadius: 30,
    color: '#ffffff',
    alignItems: 'center',
    padding: 10
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18
  }
});