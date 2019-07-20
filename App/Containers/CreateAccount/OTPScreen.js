import React from "react";
import {
  View,
  TextInput,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet
} from "react-native";
import ApplicationStyles from "../../Themes/ApplicationStyles";
import FullButton from "../../Components/FullButton";
import { Colors, Fonts } from "../../Themes";

export default class OTPScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      one: "",
      two: "",
      three: "",
      four: ""
    };

    handleOne = text => {
      this.setState({ one: text });
    };

    handleTwo = text => {
      this.setState({ two: text });
    };

    handleThree = text => {
      this.setState({ three: text });
    };
    handleFour = text => {
      this.setState({ four: text });
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
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  padding: 15
                }}
              >
                <View style={styles.bottomLine}>
                  <TextInput
                    style={styles.textInside}
                    placeholder="0"
                    maxLength={1}
                    onChangeText={this.handleOne}
                    autoCorrect={false}
                    secureTextEntry={true}
                    returnKeyType="next"
                    autoFocus={true}
                    onKeyPress={() => this.secondBox.focus()}
                    blurOnSubmit={false}
                    selectTextOnFocus={true}
                  />
                </View>
                <View style={styles.bottomLine}>
                  <TextInput
                    style={styles.textInside}
                    placeholder="0"
                    maxLength={1}
                    onChangeText={this.handleTwo}
                    autoCorrect={false}
                    secureTextEntry={true}
                    returnKeyType="next"
                    ref={input => {
                      this.secondBox = input;
                    }}
                    onKeyPress={() => {
                      this.thirdBox.focus();
                    }}
                    blurOnSubmit={false}
                    selectTextOnFocus={true}
                  />
                </View>
                <View style={styles.bottomLine}>
                  <TextInput
                    style={styles.textInside}
                    placeholder="0"
                    maxLength={1}
                    onChangeText={this.handleThree}
                    autoCorrect={false}
                    secureTextEntry={true}
                    returnKeyType="next"
                    ref={input => {
                      this.thirdBox = input;
                    }}
                    onKeyPress={() => {
                      this.fourthBox.focus();
                    }}
                    blurOnSubmit={false}
                    selectTextOnFocus={true}
                  />
                </View>
                <View style={styles.bottomLine}>
                  <TextInput
                    style={styles.textInside}
                    placeholder="0"
                    maxLength={1}
                    onChangeText={this.handleFour}
                    autoCorrect={false}
                    secureTextEntry={true}
                    returnKeyType="go"
                    ref={input => {
                      this.fourthBox = input;
                    }}
                    blurOnSubmit={true}
                    selectTextOnFocus={true}
                  />
                </View>
              </View>
              <FullButton
                text="ok"
                onPress={() => this.props.navigation.navigate("WhoAreYouStack")}
              />
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  bottomLine: {
    flex: 1,
    margin: 10,
    borderBottomWidth: 1,
    borderColor: Colors.charcoal
  },
  textInside: {
    textAlign: "center",
    fontSize: Fonts.size.h2
  }
});
