import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import colors from "../Themes/Colors";

export default class CloseWindowButton extends React.Component {
  render() {
    return (
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          onPress={() =>
            this.props.navigationProps.dispatch({
              type: "Navigation/BACK"
            })
          }
        >
          <Icon
            name="ios-close"
            size={35}
            color={colors.drawer}
            style={{ marginRight: 10, marginBottom: -2 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
