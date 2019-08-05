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

export default class CreatePostScreen extends React.Component {
  listData = [
    { key: "Salesman" },
    { key: "Delivery Man" },
    { key: "Office Helper" },
    { key: "Business Development Officer" },
    { key: "Software Engineer" },
    { key: "Car Driver" },
    { key: "Volunteer" },
    { key: "Supplier" },
    { key: "Watchman" },
    { key: "Reporter" }
  ];

  render() {
    return (
      <SafeAreaView style={ApplicationStyles.screen.mainContainer}>
        <KeyboardAvoidingView
          behavior="padding"
          style={ApplicationStyles.screen.mainContainer}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
              <Text style={[styles.inputLabel, styles.labelAlign]}>
                Popular Titles
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
                <Chip text="Salesman" />
                <Chip text="Delivery man" />
                <Chip text="Office Helper" />
                <Chip text="Business Development Officer" />
                <Chip text="Software Engineer" />
                <Chip text="Car Driver" />
                <Chip text="Volunteer" />
                <Chip text="Supplier" />
                <Chip text="Watchman" />
                <Chip text="Reporter" />
              </ScrollView>
              <InputBox
                label="Title"
                maxLength={Metrics.length.baseLength}
                onChangeText={this.handleEmail}
                returnKeyType="next"
                styles={styles.mediumVertical}
              />
              <View style={[styles.row, styles.shortVertical]}>
                <Text style={[styles.inputLabel, styles.labelWidth]}>Job</Text>
                <View style={[styles.insideRow]}>
                  <Chip text="Full time" />
                  <Chip text="Part time" />
                </View>
              </View>
              <View style={[styles.row, styles.shortVertical]}>
                <Text style={[styles.inputLabel, styles.labelWidth]}>Date</Text>
                <View style={[styles.insideRow]}>
                  <Chip text="Start date" />
                  <Chip text="End date" />
                </View>
              </View>
              <View style={[styles.row, styles.shortVertical]}>
                <Text style={[styles.inputLabel, styles.labelWidth]}>Time</Text>
                <View style={[styles.insideRow]}>
                  <Chip text="Start time" />
                  <Chip text="End time" />
                </View>
              </View>
              <InputBox
                label="Salary"
                maxLength={Metrics.length.baseLength}
                onChangeText={this.handleEmail}
                returnKeyType="next"
                styles={styles.mediumVertical}
              />
              <View style={[styles.flexRow]}>
                <Chip text="Hourly" />
                <Chip text="Daily" />
                <Chip text="Monthly" />
              </View>
              <Text style={[styles.inputLabel, styles.labelAlign]}>
                Job Location
              </Text>
              <Text style={styles.labelAlign}>
                Flat 100, RBI Commercial Complex, Opp. Reliance Fresh, Masjid
                Banda, Kondapur, Hyderabad, Telangana - 500084
              </Text>
              <Button
                title="Choose Address"
                onPress={() =>
                  this.props.navigation.navigate("AddressEntryStack")
                }
              />
              <FullButton
                text="Next"
                onPress={() => this.props.navigation.navigate("Requirement")}
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
  labelWidth: { width: "10%" },
  row: {
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "94%"
  },
  insideRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "84%",
    height: 50
  },
  labelAlign: { alignSelf: "flex-start", marginTop: "4%" },
  shortVertical: { marginTop: "2%" },
  mediumVertical: { marginTop: "5%" }
});
