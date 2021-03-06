import React from "react";
import { View, Image, TouchableOpacity } from "react-native";

export default class ProfilePicture extends React.Component {
  render() {
    return (
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={() => alert("Add your profile picture")}>
          <Image
            source={{
              uri: "https://i.pravatar.cc/50"
            }}
            style={{
              width: 200,
              height: 200,
              borderRadius: 200 / 2
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
