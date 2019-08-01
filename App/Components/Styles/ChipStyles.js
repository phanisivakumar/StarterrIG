import { StyleSheet } from "react-native";
import { Fonts, Colors } from "../../Themes";

export default StyleSheet.create({
  chip: {
    margin: 10,
    backgroundColor: Colors.snow,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: Colors.steel,
    //justifyContent: "flex-start",
    alignSelf: "flex-start"
  },
  chipText: {
    marginHorizontal: 10,
    marginVertical: 3,
    textAlign: "center",
    color: "#000",
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.type.base
  }
});
