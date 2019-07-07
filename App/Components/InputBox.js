import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, TextInput } from "react-native";
import styles from "./Styles/InputBoxStyles";
import ExamplesRegistry from "../Services/ExamplesRegistry";

// Note that this file (App/Components/FullButton) needs to be
// imported in your app somewhere, otherwise your component won't be
// compiled and added to the examples dev screen.

// Ignore in coverage report
/* istanbul ignore next */
ExamplesRegistry.addComponentExample("Full Button", () => (
  <InputBox label="" maxLength={30} onChangeText={this.handleInput} />
));

export default class InputBox extends Component {
  static propTypes = {
    label: PropTypes.string,
    maxLength: PropTypes.number,
    onChangeText: PropTypes.func,
    styles: PropTypes.object,
    keyboardType: PropTypes.string,
    returnKeyType: PropTypes.string,
    autoCorrect: PropTypes.bool,
    secureTextEntry: PropTypes.bool
  };

  render() {
    return (
      <View>
        <Text style={[styles.inputLabel, this.props.styles]}>
          {this.props.label && this.props.label.toUpperCase()}
        </Text>
        <TextInput
          style={styles.inputBox}
          maxLength={this.props.maxLength}
          onChangeText={this.props.onChangeText}
          keyboardType={this.props.keyboardType}
          returnKeyType={this.props.returnKeyType}
          autoCorrect={this.props.autoCorrect}
          secureTextEntry={this.props.secureTextEntry}
        />
      </View>
    );
  }
}
