import React from "react";
import { Text, View, Button } from "react-native";

export default class HomeScreen extends React.Component {
  // static navigationOptions = {
  //   drawerLabel: "Home"
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
        <Text>Home!</Text>
        <Button
          title="Go to Manage"
          onPress={() => this.props.navigation.navigate("Manage")}
        />
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate("Details")}
        />
      </View>
    );
  }
}
