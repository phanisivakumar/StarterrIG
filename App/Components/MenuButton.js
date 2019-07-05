import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import colors from "../Themes/Colors";

class MenuButton extends React.Component {
  toggleDrawer = () => {
    //console.log(this.props.navigationProps);
    this.props.navigationProps.toggleDrawer();
  };

  render() {
    return (
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          <Icon
            name="ios-menu"
            size={40}
            color={colors.drawer}
            style={{ width: 25, marginLeft: 10, marginBottom: -6 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default MenuButton;
