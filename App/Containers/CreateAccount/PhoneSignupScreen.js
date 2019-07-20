import React from "react";
import {
  View,
  Button,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import ApplicationStyles from "../../Themes/ApplicationStyles";
import FullButton from "../../Components/FullButton";
import InputBox from "../../Components/InputBox";
import { Metrics } from "../../Themes";

export default class PhoneSignupScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={ApplicationStyles.screen.mainContainer}>
        <KeyboardAvoidingView
          behavior="padding"
          style={ApplicationStyles.screen.mainContainer}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={ApplicationStyles.screen.mainContainer}>
              <InputBox
                label="phone"
                maxLength={Metrics.length.baseLength}
                onChangeText={this.handleEmail}
                keyboardType="phone-pad"
                returnKeyType="next"
              />
              <FullButton
                text="Verify"
                onPress={() => this.props.navigation.navigate("OTPStack")}
              />
              <Button
                title="SignIn"
                onPress={() => this.props.navigation.navigate("AuthStack")}
              />
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}
