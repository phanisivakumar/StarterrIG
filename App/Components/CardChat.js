import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Colors, Fonts } from "../Themes";
import Icon from "react-native-vector-icons/FontAwesome";

export default class CardChat extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.id);
  };

  messagesLeft = [
    "Hello",
    "Send contact info",
    "Good Morning",
    "Are you there?",
    "I'll let you know",
    "Like to do in-person interview",
    "What is your phone number?",
    "Working on it",
    "Thanks",
    "Appreciate that"
  ];

  messagesRight = [
    "Hi",
    "Good Morning",
    "Are you there?",
    "Please let me know",
    "May I know your phone number?",
    "May I know the status?",
    "Thank you",
    "Hope you are doing good",
    "Could you please respond?",
    "I appreciate your reply"
  ];

  random = Math.floor(Math.random() * this.messagesLeft.length);

  randomMessage = () => {
    return (
      <Text style={[styles.messageText]}>
        {this.random % 2 === 0
          ? this.messagesLeft[this.random]
          : this.messagesRight[this.random]}
      </Text>
    );
  };

  randomChatStyle = () => {
    return this.random % 2 === 0 ? styles.cardLeft : styles.cardRight;
  };

  render() {
    return (
      <View style={[styles.card, styles.cardShadow, this.randomChatStyle()]}>
        <Text style={styles.messageText}>{this.randomMessage()}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: "3%",
    marginTop: 10,
    borderRadius: 6,
    justifyContent: "flex-end"
  },
  cardLeft: {
    alignSelf: "flex-start",
    borderTopLeftRadius: 0,
    backgroundColor: "#e6fff8"
  },
  cardRight: {
    alignSelf: "flex-end",
    borderBottomRightRadius: 0,
    backgroundColor: "#FFF"
  },
  cardShadow: {
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 1
    },
    elevation: 1
  },
  messageText: {
    fontSize: Fonts.size.regular,
    color: "#000",
    padding: 5
  }
});
