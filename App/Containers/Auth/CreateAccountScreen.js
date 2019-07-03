import React from "react";
import { Text, View, Button } from "react-native";

export default class CreateAccountScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Create Account!</Text>
        <Button
          title="Go to Sign In"
          onPress={() => this.props.navigation.navigate("AuthStack")}
        />
      </View>
    );
  }
}
