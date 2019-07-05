import React from "react";
import { Text, View, Button } from "react-native";

export default class PasscodeConfirmScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Confirm Passcode!</Text>
        <Button
          title="Save"
          onPress={() => this.props.navigation.navigate("Posters")}
        />
      </View>
    );
  }
}
