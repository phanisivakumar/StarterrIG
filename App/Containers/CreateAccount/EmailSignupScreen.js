// import React from "react";
// import { Text, View, Button } from "react-native";

// export default class EmailSignupScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <Text>Email Address:</Text>
//         <Text>Password:</Text>
//         <Text>Confirm Password:</Text>
//         <Button
//           title="Signup & Verify"
//           onPress={() => this.props.navigation.navigate("OTP")}
//         />
//         <Button
//           title="Phone Signup"
//           onPress={() => this.props.navigation.navigate("PhoneSignup")}
//         />
//       </View>
//     );
//   }
// }

import React from "react";
import {
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import ApplicationStyles from "../../Themes/ApplicationStyles";
import FullButton from "../../Components/FullButton";
import InputBox from "../../Components/InputBox";
import { Metrics } from "../../Themes";

export default class EmailSignupScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      confirmPassword: ""
    };

    handleEmail = text => {
      this.setState({ email: text });
    };

    handlePassword = text => {
      this.setState({ password: text });
    };

    handleConfirmPassword = text => {
      this.setState({ confirmPassword: text });
    };
  }

  componentDidMount() {}

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
              <InputBox
                label="confirm password"
                maxLength={Metrics.length.baseLength}
                onChangeText={this.handleConfirmPassword}
                autoCorrect={false}
                secureTextEntry={true}
                returnKeyType="go"
              />
              <FullButton
                text="ok"
                onPress={() => this.props.navigation.navigate("OTP")}
              />
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}
