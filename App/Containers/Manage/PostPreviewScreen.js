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

export default class PostPreviewScreen extends React.Component {
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
                  <View style={[styles.viewStyle]}>
                    <View style={styles.childStyle}>
                      <Text style={[styles.inputLabel]}>Title</Text>
                      <Text>Salesman</Text>
                    </View>
                    <View style={styles.childStyle}>
                      <Text style={[styles.inputLabel]}>Start Date</Text>
                      <Text>10-Nov-2019</Text>
                    </View>
                    <View style={styles.childStyle}>
                      <Text style={[styles.inputLabel]}>Start Time</Text>
                      <Text>10.30 AM</Text>
                    </View>
                    <View style={styles.childStyle}>
                      <Text style={[styles.inputLabel]}>Salary</Text>
                      <Text>Rs. 10,000 Monthly</Text>
                    </View>
                  </View>
                  <View style={[styles.viewStyle]}>
                    <View style={styles.childStyle}>
                      <Text style={[styles.inputLabel]}>Job</Text>
                      <Text>Full time</Text>
                    </View>
                    <View style={styles.childStyle}>
                      <Text style={[styles.inputLabel]}>End Date</Text>
                      <Text>15-Dec-2019</Text>
                    </View>
                    <View style={styles.childStyle}>
                      <Text style={[styles.inputLabel]}>End Time</Text>
                      <Text>06.30 PM</Text>
                    </View>
                  </View>
                </View>

                <View style={[styles.viewStyle, styles.blockView]}>
                  <Text style={[styles.inputLabel]}>Job Location</Text>
                  <Text>
                    Flat 100, RBI Commercial Complex, Opp. Reliance Fresh,
                    Masjid Banda, Kondapur, Hyderabad, Telangana - 500084
                  </Text>
                </View>
                <View style={styles.insideContainer}>
                  <View style={[styles.viewStyle]}>
                    <View style={styles.childStyle}>
                      <Text style={[styles.inputLabel]}>Gender</Text>
                      <Text>Any</Text>
                    </View>
                    <View style={styles.childStyle}>
                      <Text style={[styles.inputLabel]}>Experience</Text>
                      <Text>3-5 yrs</Text>
                    </View>
                  </View>
                  <View style={[styles.viewStyle]}>
                    <View style={styles.childStyle}>
                      <Text style={[styles.inputLabel]}>Known Language</Text>
                      <Text>Local Language</Text>
                    </View>

                    <View style={styles.childStyle}>
                      <Text style={[styles.inputLabel]}>Additional</Text>
                      <Text>Driving License</Text>
                      <Text>Own Vehicle</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.viewStyle}>
                  <Text style={[styles.inputLabel]}>Tell More?</Text>
                  <Text>
                    Flat 100, RBI Commercial Complex, Opp. Reliance Fresh,
                    Masjid Banda, Kondapur, Hyderabad, Telangana - 500084 Flat
                    100, RBI Commercial Complex, Opp. Reliance Fresh, Masjid
                    Banda, Kondapur, Hyderabad, Telangana - 500084
                  </Text>
                </View>
                <View style={[styles.viewStyle, styles.comfortView]}>
                  <FullButton
                    text="Submit for Review"
                    onPress={() =>
                      this.props.navigation.navigate("DrawerStack")
                    }
                    styles={styles.childStyle}
                  />
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
    justifyContent: "space-between"
    //flexDirection: "column"
  },
  insideContainer: {
    flexDirection: "row"
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
