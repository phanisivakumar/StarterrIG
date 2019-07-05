import React from "react";
import { Text, View, Button } from "react-native";

export default class PasscodeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Passcode!</Text>
        <Button
          title="Next"
          onPress={() => this.props.navigation.navigate("PasscodeConfirm")}
        />
      </View>
    );
  }
}
