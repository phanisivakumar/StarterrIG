import React from "react";
import { Text, View, Button } from "react-native";

export default class EmailSignupScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Email Signup!</Text>
        <Button
          title="Create Account"
          onPress={() => this.props.navigation.navigate("OTP")}
        />
        <Button
          title="Phone Signup"
          onPress={() => this.props.navigation.navigate("PhoneSignup")}
        />
      </View>
    );
  }
}
