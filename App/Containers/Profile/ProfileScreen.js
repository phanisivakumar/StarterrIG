import React from "react";
import {
  SafeAreaView,
  View,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback
} from "react-native";
import ProfilePicture from "../../Components/ProfilePicture";
import ApplicationStyles from "../../Themes/ApplicationStyles";
import FullButton from "../../Components/FullButton";
import InputBox from "../../Components/InputBox";
import { Metrics } from "../../Themes";

export default class ProfileScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={ApplicationStyles.screen.mainContainer}>
        <KeyboardAvoidingView behavior="padding">
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View>
              <View style={{ alignItems: "center" }}>
                <ProfilePicture />
              </View>
              <View>
                <InputBox
                  label="first name"
                  maxLength={Metrics.length.baseLength}
                  //onChangeText={this.handleEmail}
                  autoCorrect={false}
                  keyboardType="default"
                  returnKeyType="next"
                />
                <InputBox
                  label="last name"
                  maxLength={Metrics.length.baseLength}
                  //onChangeText={this.handleEmail}
                  autoCorrect={false}
                  keyboardType="default"
                  returnKeyType="next"
                />
                <InputBox
                  label="date of birth"
                  maxLength={Metrics.length.baseLength}
                  //onChangeText={this.handleEmail}
                  placeholder="dd.mm.yyyy"
                  keyboardType="numeric"
                  returnKeyType="next"
                />
                <FullButton
                  text="ok"
                  onPress={() => this.props.navigation.navigate("Posters")}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}
