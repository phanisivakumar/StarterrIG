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
import ApplicationStyles from "../../Themes/ApplicationStyles";
import Icon from "react-native-vector-icons/FontAwesome";
import FullButton from "../../Components/FullButton";
import Chip from "../../Components/Chip";
import { Colors, Fonts } from "../../Themes";

export default class JobStatusScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={ApplicationStyles.screen.mainContainer}>
        <KeyboardAvoidingView
          behavior="padding"
          style={ApplicationStyles.screen.mainContainer}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View>
              <View style={styles.container}>
                <View style={styles.rowStyle}>
                  <View style={styles.childStyle}>
                    <Icon name="circle" style={[styles.active]} />
                    <Chip text="Applied" styles={styles.activeStatus} />
                  </View>
                  <Text>01-Mar-19</Text>
                </View>
                <View style={styles.rowStyle}>
                  <View style={styles.childStyle}>
                    <Icon name="circle" style={[styles.active]} />
                    <Chip
                      text="Schedule Interview"
                      styles={styles.activeStatus}
                      onPress={() => {
                        alert("Open Calendar");
                      }}
                    />
                  </View>
                  <Text>02-Mar-19</Text>
                </View>
                <View style={styles.rowStyle}>
                  <View style={styles.childStyle}>
                    <Icon name="circle" style={[styles.inActive]} />
                    <Chip
                      text="Job Offer"
                      onPress={() => {
                        alert("Confirmation");
                      }}
                    />
                  </View>
                  <Text />
                </View>
                <View style={styles.rowStyle}>
                  <View style={styles.childStyle}>
                    <Icon name="circle" style={[styles.inActive]} />
                    <Chip
                      text="Accept Offer"
                      onPress={() => {
                        alert("Confirmation");
                      }}
                    />
                  </View>
                  <Text />
                </View>
                <View style={styles.rowStyle}>
                  <View style={styles.childStyle}>
                    <Icon name="circle" style={[styles.inActive]} />
                    <Chip
                      text="Confirm Job"
                      onPress={() => {
                        alert("Confirmation");
                      }}
                    />
                  </View>
                  <Text />
                </View>
              </View>
              <FullButton
                text="Save"
                onPress={() => this.props.navigation.navigate("DrawerStack")}
              />
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: "4%"
  },
  rowStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  childStyle: {
    flexDirection: "row",
    alignItems: "center"
  },
  activeStatus: {
    borderColor: Colors.banner
  },
  active: {
    fontSize: Fonts.size.medium,
    color: Colors.banner
  },
  inActive: {
    fontSize: Fonts.size.medium,
    color: Colors.lightgray
  }
});
