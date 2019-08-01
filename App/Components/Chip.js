import React, { Component } from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, Text } from "react-native";
import styles from "./Styles/ChipStyles";

export default class Chip extends Component {
  static propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
    styles: PropTypes.object
  };

  render() {
    return (
      <TouchableOpacity
        style={[styles.chip, this.props.styles]}
        onPress={this.props.onPress}
      >
        <Text style={styles.chipText}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}
