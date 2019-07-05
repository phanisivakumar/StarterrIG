import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import colors from "../Themes/Colors";

export default class HomeButton extends React.Component {
  render() {
    return (
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          onPress={() => this.props.navigationProps.navigate("Posters")}
        >
          <Icon
            name="ios-list"
            size={35}
            color={colors.drawer}
            style={{ marginRight: 10, marginBottom: -2 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
