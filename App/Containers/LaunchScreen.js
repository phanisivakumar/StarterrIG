import React, { Component } from "react";
import { ScrollView, Text, Image, View, Button } from "react-native";
import { Images, Fonts, Metrics } from "../Themes";
import FullButton from "../Components/FullButton";

// Styles
import styles from "./Styles/LaunchScreenStyles";

export default class LaunchScreen extends Component {
  constructor(props) {
    super(props);

    // setTimeout(() => {
    //   if (Math.floor(Math.random() * Math.floor(9)) % 2 === 0) {
    //     //If auth token NOT exists then stay on this page.
    //   } else {
    //     //If auth token exists take to 4 digit passcode or main screens.
    //     this.props.navigation.navigate("MainStack");
    //   }
    // }, 2000);
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
          <View style={[styles.centered, { marginTop: Metrics.doubleSection }]}>
            <Image source={Images.launch} style={styles.logo} />
          </View>
          <View style={styles.section}>
            <Image source={Images.ready} />
            <Text style={styles.sectionText}>We are glad to see you!</Text>
          </View>
          <FullButton
            text="Create an Account"
            onPress={() => this.props.navigation.navigate("CreateAccountStack")}
          />
          <Button
            title="Sign In"
            onPress={() => this.props.navigation.navigate("AuthStack")}
          />
        </ScrollView>
      </View>
    );
  }
}
