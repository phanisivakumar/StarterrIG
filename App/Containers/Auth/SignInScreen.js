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

export default class SignInScreen extends React.Component {
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
                label="email"
                maxLength={Metrics.length.baseLength}
                onChangeText={this.handleEmail}
                keyboardType="email-address"
                returnKeyType="next"
              />
              <InputBox
                label="password"
                maxLength={Metrics.length.baseLength}
                onChangeText={this.handlePassword}
                autoCorrect={false}
                secureTextEntry={true}
                returnKeyType="next"
              />
              <FullButton
                text="ok"
                onPress={() => this.props.navigation.navigate("WhoAreYouStack")}
              />
              <Button
                title="Reset Password"
                onPress={() => this.props.navigation.navigate("ResetPassword")}
              />
              <Button
                title="Create an Account"
                onPress={() =>
                  this.props.navigation.navigate("CreateAccountStack")
                }
              />
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}
