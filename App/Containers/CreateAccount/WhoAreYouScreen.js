import React from "react";
import { Text, View, Button } from "react-native";

export default class WhoAreYouScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Tell us about you!</Text>
        <Button
          title="Job Seeker"
          onPress={() => this.props.navigation.navigate("DrawerStack")}
        />
        <Button
          title="Job Provider"
          onPress={() => this.props.navigation.navigate("DrawerStack")}
        />
        <Button
          title="Recruiter"
          onPress={() => this.props.navigation.navigate("DrawerStack")}
        />
      </View>
    );
  }
}
