import React from "react";
import { View, SafeAreaView, Image, StyleSheet, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import images from "../../Themes/Images";

export default class TermsConditionsScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/* <View style={styles.headerContainer}>
          <Image source={images.logo} style={styles.headerLogo} />
        </View> */}
        <ScrollView>
          <Text>Terms and Conditions Details</Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  } //,
  //   headerContainer: {
  //     height: 150,
  //     backgroundColor: "white"
  //     // alignItems: "center",
  //     // justifyContent: "center"
  //   },
  //   headerLogo: {
  //     borderRadius: 60
  //   }
});
