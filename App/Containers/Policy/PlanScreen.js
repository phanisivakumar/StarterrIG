import React from "react";
import { SafeAreaView, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ApplicationStyles from "../../Themes/ApplicationStyles";

export default class PlanScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={ApplicationStyles.screen.mainContainer}>
        <ScrollView>
          <Text>Plan details</Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
