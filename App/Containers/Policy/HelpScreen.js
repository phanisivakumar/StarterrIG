import React from "react";
import { View, Button, SafeAreaView, StyleSheet, Text } from "react-native";
export default class PrivacyPolicyScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text>Write down your questions before hit "Call me" button.</Text>
          <Text>You could use "Call me" ONCE PER DAY ONLY.</Text>
          <Button
            title="Call me"
            onPress={() => {
              alert("We will reach you soon.");
              this.props.navigation.navigate("Posters");
            }}
          />
        </View>
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
