import React from "react";
import { View, SafeAreaView, Image, StyleSheet, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default class PrivacyPolicyScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text>Privacy Policy Details</Text>
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
  }
});
