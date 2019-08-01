import { StyleSheet } from "react-native";
import { Fonts, Colors } from "../../Themes";

export default StyleSheet.create({
  fab: {
    width: 40,
    height: 40,
    zIndex: 1,
    borderRadius: 40 / 2,
    borderWidth: 1,
    borderColor: Colors.steel,
    backgroundColor: Colors.banner,
    justifyContent: "center",
    alignItems: "center"
  },
  fabInside: {
    color: Colors.snow,
    fontSize: Fonts.size.h4
  }
});
