import React from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { Colors, Metrics, Fonts } from "../Themes";
import ApplicationStyles from "../Themes/ApplicationStyles";
import CardJobPublic from "./CardJobPublic";
import CardText from "./CardText";
import CardVideo from "./CardVideo";

export default class ListItem extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.id);
  };

  random = Math.floor(Math.random() * 3) + 1;

  randomElement = () => {
    if (this.random === 1) {
      return <CardText />;
    } else if (this.random === 2) {
      return <CardJobPublic />;
    } else if (this.random === 3) {
      return <CardVideo />;
    }
  };

  randomTag = () => {
    if (this.random === 1) {
      return "News";
    } else if (this.random === 2) {
      return "Job";
    } else {
      return "Training";
    }
  };

  render() {
    return (
      <View style={[styles.card, styles.cardShadow]}>
        {/* <Image
          style={styles.cardImage}
          source={{
            uri: "https://i.pravatar.cc/50"
          }}
        /> */}
        <View styles={styles.cardContentBox}>
          <View style={styles.cardHeader}>
            <Text style={[ApplicationStyles.darkLabel, styles.cardTag]}>
              {this.randomTag()}
            </Text>
            <Text style={styles.cardHeaderText}>July 20</Text>
          </View>
        </View>
        {/* <TouchableOpacity onPress={this._onPress}> */}
        <View style={styles.cardContent}>{this.randomElement()}</View>
        {/* </TouchableOpacity> */}
        <View style={styles.cardFooter}>
          <TouchableOpacity
            onPress={() => {
              this.openShare();
            }}
          >
            <View style={styles.viewIcon}>
              <Icon name="eye" style={styles.cardFooterText} />
              <Text style={styles.iconText}>10</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.openShare();
            }}
          >
            <Icon name="bookmark" style={styles.cardFooterText} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.openShare();
            }}
          >
            <Icon name="corner-up-right" style={styles.cardFooterText} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFF",
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
  cardImage: { width: "100%", height: 200, resizeMode: "cover" },
  cardContentBox: { width: "100%", height: 200 },
  //   cardText: {
  //     fontSize: 14,
  //     color: Colors.charcoal
  //   },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between"
    // borderColor: "black",
    // borderWidth: 1
  },
  cardHeaderText: {
    fontSize: 14,
    color: Colors.steel,
    marginRight: 5
  },
  cardContent: {
    //width: Metrics.screenWidth - 40,
    // fontSize: 14,
    // color: Colors.gray,
    //paddingHorizontal: 10,
    height: 100,
    padding: 15
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 10
    // borderColor: "black",
    // borderWidth: 1
  },
  cardFooterText: {
    fontSize: 18,
    color: Colors.gray
  },
  viewIcon: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  cardTag: {
    marginLeft: "2%"
  },
  iconText: {
    color: Colors.gray,
    marginTop: 2,
    marginLeft: "2%",
    fontSize: Fonts.size.small
  }
});
