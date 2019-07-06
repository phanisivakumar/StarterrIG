import React from "react";
import {
  View,
  Text,
  Button,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { DrawerItems } from "react-navigation";
import images from "../Themes/Images";
import ApplicationStyles from "../Themes/ApplicationStyles";
import Font from "../Themes/Fonts";

const CustomDrawerComponent = props => (
  <SafeAreaView style={ApplicationStyles.screen.mainContainer}>
    <View style={ApplicationStyles.screen.section}>
      <Image source={images.logo} style={ApplicationStyles.logo} />
      <Text>Acc# 1HC190706</Text>
      <Text>2 Credits</Text>
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
    <View style={styles.insideContainer}>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("PrivacyPolicyStack")}
      >
        <Text style={Font.style.description}>Privacy Policy</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("TermsConditionsStack")}
      >
        <Text style={Font.style.description}>Terms and Conditions</Text>
      </TouchableOpacity>
      <Button
        style={styles.footer}
        title="Log Out"
        onPress={() => props.navigation.navigate("AuthStack")}
      />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  insideContainer: {
    marginBottom: 40,
    marginLeft: 15
  },
  footer: {
    marginTop: 50
  }
});

export default CustomDrawerComponent;

// import React, { Component } from "react";
// import { NavigationActions } from "react-navigation";
// import { Text, View, StyleSheet, Image } from "react-native";

// export default class CustomDrawer extends Component {
//   navigateToScreen = route => () => {
//     const navigateAction = NavigationActions.navigate({
//       routeName: route
//     });
//     this.props.navigation.dispatch(navigateAction);
//   };

//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.headerContainer} />
//         <View style={styles.screenContainer}>
//           <View
//           // style={[
//           //   //styles.screenStyle,
//           //   this.props.activeItemKey == "Home"
//           //     ? styles.activeBackgroundColor
//           //     : null
//           // ]}
//           >
//             <Text
//               //   style={[
//               //     //styles.screenTextStyle,
//               //     this.props.activeItemKey == "Home"
//               //       ? styles.selectedTextStyle
//               //       : null
//               //   ]}
//               onPress={this.navigateToScreen("Home")}
//             >
//               Home
//             </TouchableOpacity>
//           </View>
//           {/* <View
//             style={[
//               styles.screenStyle,
//               this.props.activeItemKey == "ScreenB"
//                 ? styles.activeBackgroundColor
//                 : null
//             ]}
//           >
//             <Text
//               style={[
//                 styles.screenTextStyle,
//                 this.props.activeItemKey == "ScreenB"
//                   ? styles.selectedTextStyle
//                   : null
//               ]}
//               onPress={this.navigateToScreen("ScreenB")}
//             >
//               Screen B
//             </Text>
//           </View>
//           <View
//             style={[
//               styles.screenStyle,
//               this.props.activeItemKey == "ScreenC"
//                 ? styles.activeBackgroundColor
//                 : null
//             ]}
//           >
//             <Text
//               style={[
//                 styles.screenTextStyle,
//                 this.props.activeItemKey == "ScreenC"
//                   ? styles.selectedTextStyle
//                   : null
//               ]}
//               onPress={this.navigateToScreen("ScreenC")}
//             >
//               Screen C
//             </Text>
//           </View> */}
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     alignItems: "center"
//   },
//   headerContainer: {
//     height: 100,
//     backgroundColor: "rgba(52, 52, 52, 0.8)"
//   },
//   headerText: {
//     color: "#fff8f8"
//   },
//   screenContainer: {
//     paddingTop: 20,
//     width: "100%"
//   }
//   //   screenStyle: {
//   //     height: 30,
//   //     marginTop: 2,
//   //     flexDirection: "row",
//   //     alignItems: "center",
//   //     width: "100%"
//   //   },
//   //   screenTextStyle: {
//   //     fontSize: 20,
//   //     marginLeft: 20,
//   //     textAlign: "center"
//   //   },
//   //   selectedTextStyle: {
//   //     fontWeight: "bold",
//   //     color: "#00adff"
//   //   },
//   //   activeBackgroundColor: {
//   //     backgroundColor: "grey"
//   //   }
// });
