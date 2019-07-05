import React from "react";
import { Text, View, Button } from "react-native";

export default class SignInScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>SignIn!</Text>
        <Button
          title="Reset Password"
          onPress={() => this.props.navigation.navigate("ResetPassword")}
        />
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate("DrawerStack")}
        />
        <Button
          title="Phone Sign Up"
          onPress={() => this.props.navigation.navigate("CreateAccountStack")}
        />
      </View>
    );
  }
}
