import React from "react";
import { View, Image, TouchableOpacity } from "react-native";

export default class DisplayPicture extends React.Component {
  render() {
    return (
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          onPress={() => this.props.navigationProps.navigate("Profile")}
        >
          <Image
            source={{
              uri: "https://i.pravatar.cc/50"
            }}
            style={{
              width: 40,
              height: 40,
              borderRadius: 40 / 2,
              marginRight: 10,
              marginBottom: 6
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
