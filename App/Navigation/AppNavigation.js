import React from "react";
import { Text } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
  createDrawerNavigator,
  createSwitchNavigator
} from "react-navigation";
import { Ionicons } from "react-native-vector-icons";
import styles from "./Styles/NavigationStyles";
import LaunchScreen from "../Containers/LaunchScreen";
import HomeScreen from "../Containers/Home/HomeScreen";
import DetailsScreen from "../Containers/Home/DetailsScreen";
import ManageScreen from "../Containers/Manage/ManageScreen";
import SignInScreen from "../Containers/Auth/SignInScreen";
import ResetPasswordScreen from "../Containers/Auth/ResetPasswordScreen";
import CustomDrawerComponent from "../Components/CustomDrawer";
import CreateAccountScreen from "../Containers/CreateAccount/CreateAccountScreen";
import OTPScreen from "../Containers/CreateAccount/OTPScreen";
import PrivacyPolicyScreen from "../Containers/Policy/PrivacyPolicyScreen";
import TermsConditionsScreen from "../Containers/Policy/TermsConditionsScreen";

// Manifest of possible screens
const HomeStack = createStackNavigator({
  Home: { screen: HomeScreen },
  Details: { screen: DetailsScreen }
});

const ManageStack = createStackNavigator({
  Manage: { screen: ManageScreen },
  Details: { screen: DetailsScreen }
});

const BottomStack = createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    Manage: { screen: ManageStack }
  },
  {
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = this.props.navigation.state;
        let iconName;
        if (routeName === "Home") {
          iconName = `ios-information-circle${focused ? "" : "-outline"}`;
        } else if (routeName === "Manage") {
          iconName = `ios-options${focused ? "" : "-outline"}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    },
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray"
    }
  }
);

const AuthStack = createStackNavigator({
  SignIn: { screen: SignInScreen },
  ResetPassword: { screen: ResetPasswordScreen }
});

const CreateAccountStack = createStackNavigator({
  CreateAccount: { screen: CreateAccountScreen },
  OTP: { screen: OTPScreen }
});

// drawer stack
const DrawerStack = createDrawerNavigator(
  {
    Home: { screen: BottomStack },
    "Privacy Policy": { screen: PrivacyPolicyScreen },
    "Terms & Conditions": { screen: TermsConditionsScreen }
  },
  {
    contentComponent: CustomDrawerComponent,
    contentOptions: { activeTintColor: "tomato" }
  }
);

// const DrawerNav = createStackNavigator(
//   {
//     DrawerStack: { screen: DrawerStack }
//   },
//   {
//     headerMode: "none"
//     // navigationOptions: ({ navigation }) => ({
//     //   headerStyle: { backgroundColor: "green" },
//     //   title: "Logged In to your app!",
//     //   headerLeft: (
//     //     <Text onPress={() => navigation.navigate("DrawerOpen")}>Menu</Text>
//     //   )
//     // })
//   }
// );

const PrimaryNav = createStackNavigator(
  {
    LaunchScreen: { screen: LaunchScreen },
    AuthStack: { screen: AuthStack },
    CreateAccountStack: { screen: CreateAccountStack },
    DrawerStack: { screen: DrawerStack }
    // PrivacyPolicy: { screen: PrivacyPolicyScreen },
    // TermsConditions: { screen: TermsConditionsScreen }
  },
  {
    // Default config for all screens
    headerMode: "none",
    initialRouteName: "LaunchScreen",
    navigationOptions: {
      headerStyle: styles.header,
      headerLeft: (
        <Text onPress={() => this.props.navigation.navigate("DrawerOpen")}>
          Menu
        </Text>
      )
    }
  }
);

export default createAppContainer(PrimaryNav);
