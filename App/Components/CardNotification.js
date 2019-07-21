import React from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { Colors, Metrics, Fonts } from "../Themes";
import ApplicationStyles from "../Themes/ApplicationStyles";
import CardText from "./CardText";

export default class CardNotification extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.id);
  };

  random = Math.floor(Math.random() * 2) + 1;

  randomTag = () => {
    if (this.random === 1) {
      return "News";
    } else if (this.random === 2) {
      return "Job";
    }
  };

  render() {
    return (
      <View style={[styles.card, styles.cardShadow]}>
        <View styles={styles.cardContentBox}>
          <View style={styles.cardHeader}>
            <Text style={[styles.cardTag, { color: Colors.text }]}>
              Notification
            </Text>
            <Text style={styles.cardHeaderText}>
              {this.randomTag()} * July 20
            </Text>
          </View>
        </View>
        <TouchableOpacity onPress={this._onPress}>
          <View style={styles.cardContent}>
            <CardText textColor={Colors.text} />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.banner,
    marginBottom: 10,
    marginLeft: "2%",
    width: "96%"
  },
  cardShadow: {
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowRadius: 1,
    shadowOffset: {
      width: 0,
      height: 1
    },
    elevation: 1
  },
  cardContentBox: { width: "100%", height: 200 },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  cardHeaderText: {
    fontSize: 14,
    color: Colors.steel,
    marginRight: 5
  },
  cardContent: {
    height: 100,
    padding: 15
  },
  cardTag: {
    marginLeft: "2%"
  }
});
