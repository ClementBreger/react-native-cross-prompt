/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Prompt from 'react-native-cross-prompt'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      promptVisible: false,
    }
  }

  _handlePrompt = (value) => {
    alert(value)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to react-native-input-prompt</Text>
        <Text style={styles.instructions}>Tap the button to open the prompt!</Text>
        <TouchableOpacity style={styles.button} onPress={() => this.setState({ promptVisible: true })}>
          <Text style={styles.buttonText}>Show prompt</Text>
        </TouchableOpacity>
        <Prompt
          visible={this.state.promptVisible}
          title="Title"
          description="This is the prompt description."
          placeholder="placeholder"
          onCancel={(visible) => this.setState({ prompt1Visible: visible })}
          onSubmit={(value) => this._handlePrompt(value)}
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    marginTop: 15,
    backgroundColor: 'blue',
    padding: 10,
    elevation: 5,
  },
  buttonText:{
    color: 'white',
    fontWeight: 'bold',
  },
});
