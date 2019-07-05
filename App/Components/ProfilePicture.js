import React, { Component } from "react";
import { View, Image } from "react-native";

export default class ProfilePicture extends Component {
  render() {
    return (
      <View style={{ flexDirection: "row" }}>
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
      </View>
    );
  }
}
