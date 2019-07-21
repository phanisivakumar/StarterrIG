import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Colors, Fonts } from "../Themes";

export default class CardText extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.id);
  };

  render() {
    return (
      <TouchableOpacity onPress={this._onPress}>
        <Text style={styles.contentText}>
          Think of your container as a line of people. And you are telling each
          person to stand 5 meters behind the person in front of him (marginTop:
          5). If this person is set to relative he will respect the line and
          will position himself relatively to the person in front of him. If
          this person is set to absolute he will ignore all of the people in the
          line and will position himself as if the line was empty, 5 meters from
          where the line (his parent container) starts.
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  contentText: {
    fontSize: Fonts.size.small,
    color: Colors.charcoal
  }
});
