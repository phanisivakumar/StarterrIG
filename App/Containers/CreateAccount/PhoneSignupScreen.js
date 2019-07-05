import React from "react";
import { Text, View, Button } from "react-native";

export default class PhoneSignupScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Phone Signup!</Text>
        <Button
          title="Send OTP"
          onPress={() => this.props.navigation.navigate("OTP")}
        />
        <Button
          title="Email Signup"
          onPress={() => this.props.navigation.navigate("EmailSignup")}
        />
      </View>
    );
  }
}
