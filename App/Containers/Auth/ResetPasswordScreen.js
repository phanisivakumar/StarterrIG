import React from "react";
import { Text, View, Button } from "react-native";

export default class ResetPasswordScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Email Address:</Text>
        <Button
          title="Send OTP"
          onPress={() => this.props.navigation.navigate("OTP")}
        />
      </View>
    );
  }
}
