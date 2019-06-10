# react-native-cross-prompt
A cross-platform, Google/Android & iOS style, Component for React-Native apps to prompt for user input.

## NPM
```
https://www.npmjs.com/package/react-native-cross-prompt
```

## Installation

```
$ npm install react-native-cross-prompt --save
```

## Demo
### Android
<p align="left">
  <img src="https://github.com/ClementBreger/react-native-cross-prompt/blob/master/demos/demo1.png" width="200" title="screenshot 1">
  <img src="https://github.com/ClementBreger/react-native-cross-prompt/blob/master/demos/demo2.png" width="200" title="screenshot 2">
  <img src="https://github.com/ClementBreger/react-native-cross-prompt/blob/master/demos/demo3.png" width="200" title="screenshot 3">
</p>

### iOS
Pending..

## Usage
```js
import Prompt from 'react-native-cross-prompt'

constructor(props) {
  super(props);
  this.state = {
    promptVisible: false,
  }
}

_handlePrompt = (value) => {
  alert(value)
}

<View>
  <Text>Tap the button to show the prompt!</Text>
  <Button
    title="Press me!"
    onPress={() => this.setState({ promptVisible: true })}
  />
  <Prompt
    visible={this.state.promptVisible}
    title="Title"
    description="This is the prompt description."
    placeholder="placeholder"
    onCancel={(visible) => this.setState({ promptVisible: visible })}
    onSubmit={(value) => this._handlePrompt(value)}
  />
</View>
```

## API
props:
- `visible` (boolean) -- Prompt is visible when `true`
- `title` (string, required) -- Set the title of the prompt
- `description` (string, required) -- Set the description of the prompt
- `placeholder` (string, required) -- Set the placeholder of the input field in the prompt
- `value` (string) -- Set the initial value of the input field in the prompt
- `onCancel` (function, required) -- Function that is called when "CANCEL" was fired
- `onSubmit` (function, required) -- Function that is called when "OK" was fired

## Testing
### Install node modules
`npm install`
### Run
`npm test`
