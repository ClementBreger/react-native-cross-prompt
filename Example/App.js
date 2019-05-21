/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Prompt from './inputprompt.js'

openPrompt = () => {

}

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      prompt1Visible: false,
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>Tap the button to open the prompt!</Text>
        <Button
          title="Show prompt"
          onPress={() => this.setState({ prompt1Visible: true })}
        />
        <Prompt
          visible={this.state.prompt1Visible}
          title="Title"
          description="This is the prompt description."
          placeholder="placeholder"
          onCancel={(visible) => this.setState({ prompt1Visible: visible })}
          onSubmit={(value) => alert(value)}
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
});
