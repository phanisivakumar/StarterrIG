import React from "react";
import { Text, View, Button } from "react-native";
import ProfilePicture from "../../Components/ProfilePicture";

export default class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Profile!</Text>
        <ProfilePicture />
        <Button
          title="Cool"
          onPress={() => this.props.navigation.navigate("Posters")}
        />
      </View>
    );
  }
}
