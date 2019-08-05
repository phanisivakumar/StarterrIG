import React from "react";
import {
  View,
  Text,
  Button,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ApplicationStyles from "../../Themes/ApplicationStyles";
import InputBox from "../../Components/InputBox";
import { Metrics, Colors, Fonts } from "../../Themes";
import FullButton from "../../Components/FullButton";

export default class AddressEntryScreen extends React.Component {
  state = {
    screenHeight: Metrics.screenHeight
  };

  onContentSizeChange = (contentWidth, contentHeight) => {
    this.setState({ screenHeight: contentHeight + 125 });
  };

  render() {
    const scrollEnabled = this.state.screenHeight > Metrics.screenHeight;

    return (
      <SafeAreaView style={ApplicationStyles.screen.mainContainer}>
        <KeyboardAvoidingView
          behavior="padding"
          style={ApplicationStyles.screen.mainContainer}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView
              style={{ flex: 1 }}
              contentContainerStyle={styles.scrollView}
              scrollEnabled={scrollEnabled}
              onContentSizeChange={this.onContentSizeChange}
            >
              <View style={styles.container}>
                <View style={styles.insideContainer}>
                  <InputBox
                    label="Address"
                    maxLength={Metrics.length.baseLength}
                    onChangeText={this.handleEmail}
                    returnKeyType="next"
                    styles={styles.mediumVertical}
                  />

                  <InputBox
                    label=""
                    maxLength={Metrics.length.baseLength}
                    onChangeText={this.handleEmail}
                    returnKeyType="next"
                    styles={styles.mediumVertical}
                  />
                  <InputBox
                    label=""
                    maxLength={Metrics.length.baseLength}
                    onChangeText={this.handleEmail}
                    returnKeyType="next"
                    styles={styles.mediumVertical}
                  />
                  <InputBox
                    label="Area"
                    placeholder="Ex: Madhapur"
                    maxLength={Metrics.length.baseLength}
                    onChangeText={this.handleEmail}
                    returnKeyType="next"
                    styles={styles.mediumVertical}
                  />
                  <InputBox
                    label="City/ Town"
                    placeholder="Ex: Hyderabad"
                    maxLength={Metrics.length.baseLength}
                    onChangeText={this.handleEmail}
                    returnKeyType="next"
                    styles={styles.mediumVertical}
                  />
                  <InputBox
                    label="State"
                    placeholder="Ex: Telangana"
                    maxLength={Metrics.length.baseLength}
                    onChangeText={this.handleEmail}
                    returnKeyType="next"
                    styles={styles.mediumVertical}
                  />
                  <InputBox
                    label="Country"
                    placeholder="Ex: India"
                    text="India"
                    maxLength={Metrics.length.baseLength}
                    onChangeText={this.handleEmail}
                    returnKeyType="next"
                    styles={styles.mediumVertical}
                  />
                  <View style={[styles.viewStyle, styles.comfortView]}>
                    <FullButton
                      text="Save"
                      onPress={() =>
                        this.props.navigation.navigate("AddPostStack")
                      }
                      styles={styles.childStyle}
                    />
                  </View>
                </View>
              </View>
            </ScrollView>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1
  },
  container: {
    flexGrow: 1,
    justifyContent: "space-between",
    marginHorizontal: "4%"
    //flexDirection: "column"
  },
  insideContainer: {
    flexDirection: "column"
  },
  viewStyle: {
    flex: 5,
    flexDirection: "column",
    marginHorizontal: "4%"
  },
  childStyle: {
    marginVertical: "4%"
  },
  inputLabel: {
    color: Colors.charcoal,
    fontSize: Fonts.size.small,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    letterSpacing: 1,
    opacity: 0.8,
    textTransform: "uppercase",
    alignSelf: "flex-start",
    marginTop: "4%"
  },
  comfortView: {
    height: 325,
    minHeight: 325
  },
  blockView: {
    height: 95,
    maxHeight: 95
  }
});
