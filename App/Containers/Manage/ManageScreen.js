import React from "react";
import { Text, View, Button } from "react-native";

export default class ManageScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Manage!</Text>
        <Button
          title="Go to Posters"
          onPress={() => this.props.navigation.navigate("Posters")}
        />
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate("Details")}
        />
      </View>
    );
  }
}