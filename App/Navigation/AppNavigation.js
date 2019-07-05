import React from "react";
import { Text } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
  createDrawerNavigator
} from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";
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
    List: { screen: HomeStack },
    Manage: { screen: ManageStack }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "List") {
          iconName = "ios-list";
        } else if (routeName === "Manage") {
          iconName = "ios-checkbox-outline";
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Icon name={iconName} size={35} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray",
      showLabel: false
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
