import React from "react";
import { Text, View, Button } from "react-native";

export default class OTPScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>OTP Screen!</Text>
        {/* <TextBox /> */}
        <Button
          title="Verify"
          onPress={() => this.props.navigation.navigate("AuthStack")}
        />
      </View>
    );
  }
}
