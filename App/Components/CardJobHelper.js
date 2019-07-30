import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Colors, Fonts } from "../Themes";
import Icon from "react-native-vector-icons/FontAwesome";

export default class CardJobHelper extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.id);
  };

  statuses = ["Applied", "Offer", "Confirm", "Try next time"];
  random = Math.floor(Math.random() * 4);

  randomTag = () => {
    if (this.random === 1) {
      return;
    } else if (this.random === 2) {
      return <Text style={[styles.tagBox, styles.tag]}>Closed</Text>;
    }
  };

  randomStatus = () => {
    return (
      <Text style={[styles.statusTagBox, styles.statusText]}>
        {this.statuses[this.random]}
      </Text>
    );
  };

  randomAlert = () => {
    if (this.random % 2 === 0) {
      return (
        <TouchableOpacity
          onPress={() => this.props.navigationProps.navigate("Chat")}
        >
          <Icon name="circle" style={[styles.alert]} />
        </TouchableOpacity>
      );
    }
  };

  render() {
    return (
      <View style={styles.cardContainer}>
        <View style={styles.row}>
          <Text style={styles.mainTitle}>NOV 30 - DEC 30</Text>
          <Text style={styles.mainTitle}>9:00 AM - 4:00 PM</Text>
        </View>
        <View style={[styles.card, styles.cardShadow]}>
          <TouchableOpacity onPress={this._onPress}>
            <View style={[styles.row, styles.insideHeader]}>
              <View>
                <Text style={styles.title}>Salesman</Text>
                <Text style={styles.subTitle}>Kothapet, Hyderabad</Text>
              </View>
              <View>{this.randomTag()}</View>
              <View>
                <View style={styles.row}>
                  <Text style={[styles.title]}>Rs.10,000</Text>
                  <Text style={styles.otherInfo}>/mon</Text>
                </View>
                <Text style={styles.subTitle}>FULL TIME</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View style={[styles.row, styles.statusBar]}>
            <View>{this.randomStatus()}</View>
            <View>{this.randomAlert()}</View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    marginLeft: "4%",
    width: "92%"
  },
  card: {
    backgroundColor: "#FFF",
    marginBottom: 15
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
  insideHeader: {
    marginVertical: 8,
    marginHorizontal: 10
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  mainTitle: {
    fontSize: Fonts.size.medium,
    fontWeight: "bold",
    color: Colors.banner,
    marginBottom: 10
  },
  title: {
    fontSize: Fonts.size.regular,
    color: Colors.charcoal
  },
  subTitle: {
    fontSize: Fonts.size.small,
    color: Colors.charcoal
  },
  miniTitle: {
    fontSize: Fonts.size.mini,
    color: Colors.charcoal
  },
  otherInfo: {
    fontSize: Fonts.size.tiny,
    color: Colors.charcoal,
    marginTop: 5
  },
  alert: {
    fontSize: 12,
    color: Colors.bloodOrange
  },
  tagBox: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: Colors.fire,
    padding: 2
  },
  tag: {
    fontSize: 12,
    color: Colors.fire
  },
  statusBar: {
    marginTop: 5,
    marginBottom: 10,
    marginHorizontal: 10,
    alignItems: "flex-end"
  },
  statusTagBox: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: Colors.banner,
    padding: 2
  },
  statusText: {
    fontSize: 12,
    color: Colors.banner
  }
});
