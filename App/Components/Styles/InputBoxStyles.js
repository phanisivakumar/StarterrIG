import { StyleSheet } from "react-native";
import { Fonts, Colors, Metrics } from "../../Themes";

export default StyleSheet.create({
  inputLabel: {
    color: Colors.charcoal,
    //padding: Metrics.smallMargin,
    marginTop: Metrics.smallMargin,
    //marginLeft: Metrics.baseMargin,
    //marginHorizontal: Metrics.smallMargin,
    fontSize: Fonts.size.small,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    //lineHeight: Metrics.baseMargin,
    letterSpacing: 1,
    // paddingTop: 4,
    opacity: 0.8
  },
  inputBox: {
    //marginLeft: Metrics.smallMargin,
    marginBottom: Metrics.mediumMargin,
    marginRight: Metrics.mediumMargin,
    height: Metrics.length.baseLength,
    borderColor: Colors.bottomBorder,
    borderBottomWidth: 1
  }
});
