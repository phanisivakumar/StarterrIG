import React from "react";
import { View, SafeAreaView, Image, StyleSheet, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import images from "../../Themes/Images";

const PrivacyPolicyScreen = props => (
  <SafeAreaView style={styles.container}>
    <View style={styles.headerContainer}>
      <Image source={images.logo} style={styles.headerLogo} />
    </View>
    <ScrollView>
      <Text>Privacy Policy Details</Text>
    </ScrollView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerContainer: {
    height: 150,
    backgroundColor: "white"
    // alignItems: "center",
    // justifyContent: "center"
  },
  headerLogo: {
    borderRadius: 60
  }
});

export default PrivacyPolicyScreen;
