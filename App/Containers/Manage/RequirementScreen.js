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
import Chip from "../../Components/Chip";
import InputBox from "../../Components/InputBox";
import { Metrics, Colors, Fonts } from "../../Themes";
import FullButton from "../../Components/FullButton";

export default class RequirementScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={ApplicationStyles.screen.mainContainer}>
        <KeyboardAvoidingView
          behavior="padding"
          style={ApplicationStyles.screen.mainContainer}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
              <Text
                style={[styles.inputLabel, styles.distance, styles.labelAlign]}
              >
                Gender
              </Text>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                //decelerationRate={0}
                // snapToAlignment={"center"}
                contentInset={{
                  top: 0,
                  left: 30,
                  bottom: 0,
                  right: 30
                }}
                style={{
                  // borderWidth: 1,
                  // borderColor: "red",
                  height: 50,
                  maxHeight: 50
                }}
              >
                <Chip text="Any" />
                <Chip text="Male" />
                <Chip text="Female" />
                <Chip text="Other" />
              </ScrollView>
              <Text
                style={[styles.inputLabel, styles.distance, styles.labelAlign]}
              >
                Known Language
              </Text>
              <View style={[styles.row]}>
                <Chip text="Any" />
                <Chip text="English" />
                <Chip text="Hindi" />
                <Chip text="Local Language" />
              </View>
              <Text
                style={[styles.inputLabel, styles.distance, styles.labelAlign]}
              >
                Experience
              </Text>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                //decelerationRate={0}
                // snapToAlignment={"center"}
                contentInset={{
                  top: 0,
                  left: 30,
                  bottom: 0,
                  right: 30
                }}
                style={{
                  // borderWidth: 1,
                  // borderColor: "red",
                  height: 50,
                  maxHeight: 50
                }}
              >
                <Chip text="Any" />
                <Chip text="0-1 yr" />
                <Chip text="1-3 yrs" />
                <Chip text="3-5 yrs" />
                <Chip text="5-8 yrs" />
                <Chip text="8-10 yrs" />
                <Chip text="10+ yrs" />
              </ScrollView>
              <Text
                style={[styles.inputLabel, styles.distance, styles.labelAlign]}
              >
                Additional
              </Text>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                //decelerationRate={0}
                // snapToAlignment={"center"}
                contentInset={{
                  top: 0,
                  left: 30,
                  bottom: 0,
                  right: 30
                }}
                style={{
                  // borderWidth: 1,
                  // borderColor: "red",
                  height: 50,
                  maxHeight: 50
                }}
              >
                <Chip text="Driving License" />
                <Chip text="Own Vehicle" />
              </ScrollView>
              <InputBox
                label="Tell more?"
                maxLength={Metrics.length.baseLength}
                onChangeText={this.handleEmail}
                returnKeyType="next"
              />
              <FullButton
                text="Preview"
                onPress={() => this.props.navigation.navigate("PostPreview")}
              />
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: { marginHorizontal: "4%" },
  inputLabel: {
    color: Colors.charcoal,
    //padding: Metrics.smallMargin,
    //marginTop: Metrics.smallMargin,
    //marginHorizontal: Metrics.smallMargin,
    fontSize: Fonts.size.small,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    //lineHeight: Metrics.baseMargin,
    letterSpacing: 1,
    // paddingTop: 4,
    opacity: 0.8,
    textTransform: "uppercase",
    alignSelf: "center"
  },
  //labelWidth: { width: "10%" },
  //distance: { marginLeft: "4%" },
  //shortDistance: { marginLeft: "2%" },
  row: {
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  labelAlign: { alignSelf: "flex-start", marginTop: "4%" }
});
