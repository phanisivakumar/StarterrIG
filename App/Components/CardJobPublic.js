import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Colors, Fonts } from "../Themes";

export default class CardJobPublic extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.id);
  };

  render() {
    return (
      <TouchableOpacity onPress={this._onPress} style={[styles.jobCard]}>
        <View>
          <Text style={styles.title}>Salesman</Text>
          <Text style={styles.subTitle}>Kothapet, Hyderabad</Text>
          <Text style={styles.subTitle}>FULL TIME</Text>
        </View>
        <View>
          <View style={styles.jobCard}>
            <Text style={[styles.title]}>Rs.10,000</Text>
            <Text style={styles.otherInfo}>/mon</Text>
          </View>
          <Text style={styles.subTitle}>NOV 30 - DEC 30</Text>
          <Text style={styles.subTitle}>9:00 AM - 4:00 PM</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  jobCard: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  title: {
    fontSize: Fonts.size.h5,
    color: Colors.banner
  },
  subTitle: {
    fontSize: Fonts.size.small,
    color: Colors.charcoal,
    marginTop: 10
  },
  otherInfo: {
    fontSize: Fonts.size.tiny,
    color: Colors.charcoal,
    marginTop: Fonts.size.h5 / 2.5
  }
});
