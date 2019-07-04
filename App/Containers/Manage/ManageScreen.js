import React from "react";
import { Text, View, Button } from "react-native";

export default class ManageScreen extends React.Component {
  // static navigationOptions = {
  //   drawerLabel: "Manage"
  //   // drawerIcon: ({ tintColor }) => (
  //   //   <Image
  //   //     source={require("./chats-icon.png")}
  //   //     style={[styles.icon, { tintColor: tintColor }]}
  //   //   />
  //   // )
  // };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Manage!</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate("Home")}
        />
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate("Details")}
        />
      </View>
    );
  }
}
