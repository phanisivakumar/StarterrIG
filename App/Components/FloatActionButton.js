import React, { Component } from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, Text } from "react-native";
import styles from "./Styles/FloatActionButtonStyles";
import Icon from "react-native-vector-icons/Feather";

export default class FloatActionButton extends Component {
  static propTypes = {
    featherIconName: PropTypes.string,
    onPress: PropTypes.func,
    styles: PropTypes.object
  };
  render() {
    return (
      <TouchableOpacity
        style={[styles.fab, this.props.styles]}
        onPress={this.props.onPress}
      >
        <Icon name={this.props.featherIconName} style={styles.fabInside} />
      </TouchableOpacity>
    );
  }
}
