import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
                <View style={styles.background}>
                    <View style={styles.container}>
                        <Text style={styles.title}>{this.props.title}</Text>
                        <Text style={styles.description}>{this.props.description}</Text>
                        <TextInput style={styles.input}
                            autoFocus={this.props.visible}
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
                </View>
            )
        } else {
            return (
                <View></View>
            )
        }
    }
}

Prompt.propTypes = {
    visible: PropTypes.bool,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onCancel: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        height: '110%',
        width: '110%',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        justifyContent: 'center',
        elevation: 10,
    },
    container: {
        alignSelf: 'center',
        backgroundColor: 'white',
        padding: 20,
        width: '75%',
        elevation: 10,
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