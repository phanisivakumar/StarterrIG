import React, { Component } from "react";
import { ScrollView, Text, Image, View, Button } from "react-native";
import { Images } from "../Themes";

// Styles
import styles from "./Styles/LaunchScreenStyles";

export default class LaunchScreen extends Component {
  constructor(props) {
    super(props);

    setTimeout(() => {
      if (Math.floor(Math.random() * Math.floor(9)) % 2 === 0) {
        this.props.navigation.navigate("CreateAccountStack");
      } else {
        this.props.navigation.navigate("AuthStack");
      }
    }, 2000);
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Image
          source={Images.background}
          style={styles.backgroundImage}
          resizeMode="stretch"
        />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.launch} style={styles.logo} />
          </View>

          <View style={styles.section}>
            <Image source={Images.ready} />
            <Text style={styles.sectionText}>We are glad to see you!</Text>
          </View>
          {/* <Button
            title="Sign In"
            onPress={() => this.props.navigation.navigate("AuthStack")}
          />
          <Button
            title="Create Account"
            onPress={() => this.props.navigation.navigate("CreateAccountStack")}
          /> */}
        </ScrollView>
      </View>
    );
  }
}
