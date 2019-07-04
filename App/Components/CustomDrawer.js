import React from "react";
import { View, SafeAreaView, Image, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { DrawerItems } from "react-navigation";
import images from "../Themes/Images";

const CustomDrawerComponent = props => (
  <SafeAreaView style={styles.container}>
    <View style={styles.headerContainer}>
      <Image source={images.logo} style={styles.headerLogo} />
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerContainer: {
    height: 150,
    backgroundColor: "white"
    // alignItems: "center",
    // justifyContent: "center"
  },
  headerLogo: {
    borderRadius: 60
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
//             </Text>
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
