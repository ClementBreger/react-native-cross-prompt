import React, { Component, PropTypes } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default class Prompt extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: props.value,
        }
    }

    _onCancelPress = () => {
        const { visible } = false;
        this.props.onCancel(visible);
    }

    _onSubmit = () => {
        const { value } = this.state;
        this.props.onSubmit(value);
        const { visible } = false;
        this.props.onCancel(visible);
    }

    render() {
        if (this.props.visible) {
            return (
                <View style={styles.container}>
                    <Text style={styles.title}>{this.props.title}</Text>
                    <Text style={styles.description}>{this.props.description}</Text>
                    <TextInput style={styles.input}
                        value={this.state.value}
                        onChangeText={(value) => this.setState({ value })}
                        placeholder={this.props.placeholder}
                    />
                    <View style={styles.buttons}>
                        <TouchableOpacity style={styles.button} onPress={this._onCancelPress}>
                            <Text style={styles.buttonText}>CANCEL</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={this._onSubmit}>
                            <Text style={styles.buttonText}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        } else {
            return (
                <View></View>
            )
        }
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '80%',
        padding: 20,
        elevation: 4,
        position: 'absolute',
    },
    title: {
        fontWeight: 'bold',
        color: 'black',
    },
    description: {
        marginTop: 10,
    },
    input: {
        marginTop: 10,
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 1,
    },
    buttons: {
        marginTop: 10,
        flexDirection: 'row',
        alignSelf: 'flex-end',
    },
    button: {
        margin: 10,
    },
    buttonText: {
        color: 'blue',
        fontWeight: 'bold',
    },
});